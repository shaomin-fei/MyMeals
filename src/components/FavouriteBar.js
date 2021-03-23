//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 22:54:03
 */
import * as React from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { RestaurantInfoDetail } from "../flow-types/RestaurantInfoType";
import { CompactRestaurantInfo } from "./CompactRestaurantInfo";

const Container = styled.View`
  padding: 2px;
`;
const TextNoFavourite = styled.Text`
  font-weight: bold;
  width: 100%;
  text-align: center;
`;
const TextNoFavouriteTitle = styled.Text`
  font-weight: bold;
  width: 100%;
`;
const PaddingView = styled.View`
  padding: 10px;
`;
export const FavouriteBar = ({
  favourites,
  onNavigate,
}: {
  favourites: RestaurantInfoDetail[],
  onNavigate: (string, Object) => void,
}): React.Element<*> => {
  if (favourites.length === 0) {
    return <></>;
  }
  return (
    <Container>
      <TextNoFavouriteTitle>Favourite</TextNoFavouriteTitle>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.length > 0 ? (
          favourites.map((fv) => {
            return (
              <TouchableOpacity
                key={`favouribe_bar_${fv.placeId}`}
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurantDetail: fv,
                  })
                }
              >
                <PaddingView>
                  <CompactRestaurantInfo restaurantDetail={fv} />
                </PaddingView>
              </TouchableOpacity>
            );
          })
        ) : (
          <TextNoFavourite>No Favourite Restaurant</TextNoFavourite>
        )}
      </ScrollView>
    </Container>
  );
};
