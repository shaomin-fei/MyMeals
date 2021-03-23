//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 10:19:26
 */

export class LatLng {
  lat: number = 0;
  lng: number = 0;
  constructor(lat: number = 0, lng: number = 0) {
    this.lat = lat;
    this.lng = lng;
  }
}
export class ViewPort {
  northeast: LatLng = new LatLng();
  southwest: LatLng = new LatLng();
}
export class LocationInfo {
  geometry: LatLng = new LatLng();
  viewport: ViewPort = new ViewPort();
}
