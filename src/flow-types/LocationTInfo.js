//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 10:19:26
 */

export class LatLng {
  lat: string = "";
  lng: string = "";
  constructor(lat: string = "", lng: string = "") {
    this.lat = lat;
    this.lng = lng;
  }
}
export class ViewPort {
  northeast: LatLng | null = null;
  southwest: LatLng | null = null;
}
export class LocationInfo {
  geometry: LatLng = new LatLng();
  viewport: ViewPort = new ViewPort();
}
