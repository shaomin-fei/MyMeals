//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-20 21:02:36
 */
import * as React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

// don't use my customize wrapper, use the third party library
//import { SafeAreaViewWrapper } from "../../../components/SafeAreaViewWrapper";
import { SafeAreaView } from "react-native-safe-area-context";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

import { restaurantContext } from "../../../services/restaurant/restaurant.context";
import { Loading } from "../../../components/loading/Loading";
import {
  SearchLocationBar,
  SearchLocationBarProps,
} from "../components/SearchBar";
import { RestaurantInfoDetail } from "../../../flow-types/RestaurantInfoType";
import {
  FavouriteContext,
  FavouriteContexValues,
} from "../../../services/favourites/FavouriteContext";

import { FavouriteBar } from "../../../components/FavouriteBar";

import { ListView, FatListVWithPadding } from "../components/Retaruant.styles";
const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;
export const RestaurantScreen = ({
  navigation,
}: {
  navigation: Object,
}): React.Element<*> => {
  const context = React.useContext(restaurantContext);
  const restaurants = context.restaurants;
  const isLoading = context.isLoading;
  const favouriteContext: FavouriteContexValues = React.useContext(
    FavouriteContext
  );
  const [isToggled, setIsToggled] = React.useState(false);
  const taggleChanged = (toggled) => {
    setIsToggled(toggled);
  };

  const searchProps = new SearchLocationBarProps();
  searchProps.isToggled = isToggled;
  searchProps.setIsToggled = taggleChanged;

  return (
    <StyledSafeAreaView>
      {isLoading && <Loading />}

      <SearchLocationBar searchProps={searchProps} />
      {isToggled && (
        <FavouriteBar
          favourites={favouriteContext.favourites}
          onNavigate={navigation.navigate}
        />
      )}

      {/* <Spacer /> */}
      {/* FatList's parent must set flex:1, or the list will be cut off(sometime Fatlist should set flex:1 too) */}
      <ListView>
        <FatListVWithPadding
          data={restaurants}
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
          keyExtractor={(item: { title: string, key: string }, index: number) =>
            index.toString()
          }
        />
      </ListView>
    </StyledSafeAreaView>
  );
};
