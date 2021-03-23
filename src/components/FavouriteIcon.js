//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 22:09:12
 */
import * as React from "react";
import { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import {
  FavouriteContext,
  FavouriteContexValues,
} from "../services/favourites/FavouriteContext";
import { RestaurantInfoDetail } from "../flow-types/RestaurantInfoType";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;
export const FavouriteIcon = ({
  restaurantInfoDetail,
}: {
  restaurantInfoDetail: RestaurantInfoDetail,
}): React.Element<*> => {
  const favouriteContext: FavouriteContexValues = useContext(FavouriteContext);
  const isFavourite = favouriteContext.favourites.find((fv) => {
    return fv.placeId === restaurantInfoDetail.placeId;
  });
  return (
    <FavouriteButton
      onPress={() => {
        if (isFavourite) {
          favouriteContext.removeFavourite(restaurantInfoDetail);
        } else {
          favouriteContext.addFavourtie(restaurantInfoDetail);
        }
      }}
    >
      <AntDesign name="heart" size={24} color={isFavourite ? "red" : "white"} />
    </FavouriteButton>
  );
};
