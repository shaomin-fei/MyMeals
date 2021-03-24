//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-23 22:12:43
 */
import * as React from "react";
import { useContext } from "react";
import { TouchableOpacity, Dimensions } from "react-native";

import { SettingMainView } from "../components/SettingScreenStyles";
import { FavouriteContext } from "../../../services/favourites/FavouriteContext";
import {
  ListView,
  FatListVWithPadding,
} from "../../restaurants/components/Retaruant.styles";
import { RestaurantInfoCard } from "../../restaurants/components/RestaurantInfoCard";

import type { FavouriteContexValues } from "../../../services/favourites/FavouriteContext";
import type { RestaurantInfoDetail } from "../../../flow-types/RestaurantInfoType";
import styled from "styled-components";

const NoFavouriteTip = styled.Text`
  position: absolute;
  height: 30px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  top: ${Math.round(Dimensions.get("screen").height * 0.5 - 15)}px;
`;
export const FavouriteDetailScreen = ({
  navigation,
}: {
  navigation: Object,
}): React.Element<*> => {
  const favContext: FavouriteContexValues = useContext(FavouriteContext);
  const favList = favContext.favourites;
  return (
    <SettingMainView>
      {favList.length === 0 && (
        <NoFavouriteTip>No Favourit Restaurant</NoFavouriteTip>
      )}
      {favList.length > 0 && (
        <ListView>
          <FatListVWithPadding
            data={favList}
            renderItem={({
              item,
              index,
              separators,
            }: {
              item: RestaurantInfoDetail,
              index: number,
              separators: Object,
            }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurantDetail: item,
                    })
                  }
                >
                  <RestaurantInfoCard restaurantInfoDetail={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(
              item: { title: string, key: string },
              index: number
            ) => index.toString()}
          />
        </ListView>
      )}
    </SettingMainView>
  );
};
