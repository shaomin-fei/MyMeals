//@flow
import * as React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import { SafeAreaViewWrapper } from "../../../components/SafeAreaViewWrapper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

import { RestaurantInfoDetail } from "../../../flow-types/RestaurantInfoType";

const SearchView = styled.View`
  padding: ${(props) => props.theme.sizes.normal};
`;
const ListView = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantScreen = (): React.Element<*> => {
  const restaurantInfoDetail = new RestaurantInfoDetail();
  return (
    <SafeAreaViewWrapper>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <ListView>
        <RestaurantInfoCard restaurantInfoDetail={restaurantInfoDetail} />
      </ListView>
    </SafeAreaViewWrapper>
  );
};
