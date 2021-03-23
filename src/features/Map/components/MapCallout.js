//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 17:54:19
 */
import * as React from "react";
import { CompactRestaurantInfo } from "../../../components/CompactRestaurantInfo";
import { RestaurantInfoDetail } from "../../../flow-types/RestaurantInfoType";

export const MapCallout = ({
  restaurantDetail,
}: {
  restaurantDetail: RestaurantInfoDetail,
}): React.Element<*> => {
  return (
    <CompactRestaurantInfo isMap={true} restaurantDetail={restaurantDetail} />
  );
};
