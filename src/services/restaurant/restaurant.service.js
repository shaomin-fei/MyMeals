//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-21 15:51:17
 */
import { mocks, mockImages } from "./mock/index";
import camelize from "camelize";
import axios from "axios";
import { Guid } from "js-guid";
import { configInfo } from "../../infrastructure/config/config";

import { RestaurantInfoDetail } from "../../flow-types/RestaurantInfoType";

export class SearchCondition {
  lat: number = 0;
  lnt: number = 0;
  radius: number = 5000; //unit is meter
}

export const restaurantDataTransform = (data: Object): Object => {
  const details =
    data &&
    data.results.map((dt) => {
      const detail = new RestaurantInfoDetail();
      detail.photos = dt.photos.map((photo) => {
        const index = Math.ceil(Math.random() * 10) % mockImages.length;
        return mockImages[index];
      });
      //const dt = restaurant.result;
      detail.name = dt.name;
      detail.rating = dt.rating;
      detail.isOpenNow = dt.opening_hours && dt.opening_hours.open_now;
      detail.isCloseTemporarily = dt.business_status === "CLOSED_TEMPORARILY";
      detail.address = dt.vicinity;
      detail.latlng.lat = dt.geometry.location.lat;
      detail.latlng.lng = dt.geometry.location.lng;
      detail.placeId = dt.place_id;
      return detail;
    });
  return camelize(details);
};
export const restaurantRequest = (
  // how to set default value with flow
  {
    location,
  }: {
    location: string,
  } = { location: "41.878113,-87.629799" }
): Promise<RestaurantInfoDetail[]> => {
  console.log(configInfo);
  if (configInfo && configInfo.mockData.toUpperCase() === "TRUE") {
    return mockRestaurantData(location);
  } else {
    const condition = new SearchCondition();
    const szLocation = location.split(",");
    condition.lat = parseFloat(szLocation[0]);
    condition.lnt = parseFloat(szLocation[1]);
    return new Promise((resolve, reject) => {
      searchRestaurantThroughBingmap(
        condition,
        (result) => resolve(result),
        (error) => reject(error),
        configInfo.bingMapKey
      );
    });
  }
};

const mockRestaurantData = (location: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = mocks[location];
      if (!data) {
        reject("Data not found!");
      }
      const dataTransformed = restaurantDataTransform(data);
      resolve(dataTransformed);
    }, 2000);
  });
};

export const searchRestaurantThroughBingmap = async (
  conditon: SearchCondition,
  resolve: (RestaurantInfoDetail[]) => void,
  reject: (Object) => void,
  bingKey: string
) => {
  const url = encodeURI(
    `https://dev.virtualearth.net/REST/v1/LocalSearch/?type=CoffeeAndTea,Restaurant&userCircularMapView=${conditon.lat.toString()},${conditon.lnt.toString()},${conditon.radius.toString()}&key=${bingKey}`
  );
  try {
    const result = await axios.get(url);
    const details = transformToRestaurantDetail(result.data);
    if (resolve) {
      resolve(details);
    }
  } catch (error) {
    if (reject) {
      reject(error);
    }
  }
};
const transformToRestaurantDetail = (
  objFomBing: Object
): RestaurantInfoDetail[] => {
  const restaurants: RestaurantInfoDetail[] = [];
  if (!objFomBing || !objFomBing.ResourceSets) {
    return restaurants;
  }
  for (let i = 0; i < objFomBing.ResourceSets.length; i++) {
    const resSet = objFomBing.ResourceSets[i];
    if (!resSet) {
      continue;
    }
    for (let j = 0; j < resSet.length; j++) {
      const resources = resSet[j];
      if (!resources) {
        continue;
      }
      resources.foreach((res) => {
        const detail = new RestaurantInfoDetail();
        const index = Math.ceil(Math.random() * 10) % mockImages.length;
        detail.photos.push(mockImages[index]);
        detail.type = res.EntityType; //Restaurant
        detail.address = res.Address.FormattedAddress;
        detail.isOpenNow = true;
        detail.placeId = Guid.NewGuid();
        detail.latlng.lat = res.Point.location.Latitude;
        detail.latlng.lng = res.Point.location.Longitude;
        restaurants.push(detail);
      });
    }
  }
  return restaurants;
};
