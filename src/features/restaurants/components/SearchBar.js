//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 11:16:49
 */
import * as React from "react";
import { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import { LocationContext } from "../../../services/location/LocationContext";
const SearchView = styled.View`
  padding: ${(props) => props.theme.sizes.normal};
`;
export class SearchLocationBarProps {
  setIsToggled: (boolean) => void;
  isToggled: boolean = false;
}
export const SearchLocationBar = ({
  searchProps,
}: {
  searchProps: SearchLocationBarProps,
}): React.Element<*> => {
  const context = React.useContext(LocationContext);
  const {
    setQueryLocation,
    queryLocation,
  }: {
    queryLocation: string,
    setQueryLocation: (string) => [],
  } = context;
  const [inputSearchText, setInputSearchText] = useState(queryLocation);

  useEffect(() => {
    setInputSearchText(queryLocation);
  }, [queryLocation]);
  const { isToggled } = searchProps;
  function handleToggled() {
    searchProps.setIsToggled(!isToggled);
  }
  return (
    <SearchView>
      <Searchbar
        icon={isToggled ? "heart" : "heart-outline"}
        iconColor={isToggled ? "red" : "gray"}
        onIconPress={handleToggled}
        placeholder="Search location"
        value={inputSearchText}
        onChangeText={(text) => setInputSearchText(text)}
        onSubmitEditing={() => setQueryLocation(inputSearchText)}
      />
    </SearchView>
  );
};
