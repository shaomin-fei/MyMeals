//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 10:10:07
 */

import { locations } from "./mock/LocationMock";
import { LocationInfo, LatLng } from "../../flow-types/LocationTInfo";
import { configInfo } from "../../infrastructure/config/config";

export const requestLocation = (location: string): Promise<LocationInfo> => {
  return new Promise((resolve, reject) => {
    console.log(configInfo);
    if (configInfo && configInfo.mockData.toUpperCase() === "TRUE") {
      mockLocationData(location, resolve, reject);
    } else {
    }
  });
};
const mockLocationData = (location, resolve, reject) => {
  setTimeout(() => {
    const data = locations[location];
    if (!data) {
      reject("Don't found location");
      return;
    }
    const result = locationTransform(data.results);
    if (result && result.length > 0) {
      resolve(result[0]);
    } else {
      reject("None or duplicate locations found");
    }
  }, 2000);
};
export const locationTransform = (data: Object[]): Object[] | null => {
  if (!data) {
    return null;
  }
  const results = data.map((loc) => {
    const locInfo = new LocationInfo();
    locInfo.geometry = new LatLng(
      loc.geometry.location.lat,
      loc.geometry.location.lng
    );

    loc.geometry.viewport &&
      loc.geometry.viewport.northeast &&
      (locInfo.viewport.northeast = new LatLng(
        loc.geometry.viewport.northeast.lat,
        loc.geometry.viewport.northeast.lng
      ));
    loc.geometry.viewport &&
      loc.geometry.viewport.southwest &&
      (locInfo.viewport.southwest = new LatLng(
        loc.geometry.viewport.southwest.lat,
        loc.geometry.viewport.southwest.lng
      ));
    return locInfo;
  });
  return results;
};
