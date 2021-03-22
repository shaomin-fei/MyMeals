//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-21 15:51:17
 */
import { mocks } from "./mock/index";
import camelize from "camelize";

import { RestaurantInfoDetail } from "../../flow-types/RestaurantInfoType";
export const restaurantDataTransform = (data: Object[] = []): Object => {
  const details = data.map((restaurant) => {
    const detail = new RestaurantInfoDetail();
    const dt = restaurant.result;
    detail.name = dt.name;
    detail.photos = dt.photos;
    detail.rating = dt.rating;
    detail.isOpenNow = dt.opening_hours && dt.opening_hours.open_now;
    detail.isCloseTemporarily = dt.business_status === "CLOSED_TEMPORARILY";
    detail.address = dt.vicinity;
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
  } = { location: "chicago" }
): Promise<any> => {
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
