//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-20 21:02:36
 */
import * as React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { FlatList } from "react-native";
import { Divider } from "react-native-paper";
// don't use my customize wrapper, use the third party library
//import { SafeAreaViewWrapper } from "../../../components/SafeAreaViewWrapper";
import { SafeAreaView } from "react-native-safe-area-context";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

import { RestaurantInfoDetail } from "../../../flow-types/RestaurantInfoType";
import { Spacer } from "../../../components/Spacer";
import { Text } from "../../../components/typography/Text";
import { restaurantContext } from "../../../services/restaurant/restaurant.context";
import { Loading } from "../../../components/loading/Loading";
const SearchView = styled.View`
  padding: ${(props) => props.theme.sizes.normal};
`;
const ListView = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  flex: 1;
`;
const FatListVWithPadding = styled(FlatList).attrs((props) => ({
  contentContainerStyle: { padding: 16, paddingTop: 0 },
}))`
  flex: 1;
`;
const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;
export const RestaurantScreen = (): React.Element<*> => {
  const context = React.useContext(restaurantContext);
  const restaurants = context.restaurants;
  const isLoading = context.isLoading;
  const error = context.error;
  return (
    <StyledSafeAreaView>
      {isLoading && <Loading />}
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      {/* <Spacer /> */}
      {/* FatList's parent must set flex:1, or the list will be cut off(sometime Fatlist should set flex:1 too) */}
      <ListView>
        <FatListVWithPadding
          data={restaurants}
          renderItem={({ item, index, separators }) => {
            return (
              <>
                <RestaurantInfoCard restaurantInfoDetail={item} />
              </>
            );
          }}
          keyExtractor={(item: { title: string, key: string }, index: number) =>
            index.toString()
          }
        />
      </ListView>
      <Divider style={{ borderWidth: 10, borderColor: "red" }} />
      <Spacer>
        <Text>The End</Text>
      </Spacer>
    </StyledSafeAreaView>
  );
};
