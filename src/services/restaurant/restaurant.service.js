//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-21 15:51:17
 */
import { mocks, mockImages } from "./mock/index";
import camelize from "camelize";

import { RestaurantInfoDetail } from "../../flow-types/RestaurantInfoType";
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
