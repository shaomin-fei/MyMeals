//@flow

import { LatLng } from "./LocationTInfo";

/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-20 21:02:36
 */
export class RestaurantInfoDetail {
  name: string = "Some Restaurant";
  icon: string = "";
  photos: Array<string> = [];
  address: string = "Mock address";
  isOpenNow: boolean = true;
  rating: number = 5;
  isCloseTemporarily: boolean = false;
  latlng: LatLng = new LatLng();
  placeId: string = "";
}
