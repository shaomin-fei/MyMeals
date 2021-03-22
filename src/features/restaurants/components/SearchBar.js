//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 11:16:49
 */
import * as React from "react";
import { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import { LocationContext } from "../../../services/location/LocationContext";
const SearchView = styled.View`
  padding: ${(props) => props.theme.sizes.normal};
`;
export const SearchLocationBar = (): React.Element<*> => {
  const context = React.useContext(LocationContext);
  const {
    setQueryLocation,
    queryLocation,
  }: {
    queryLocation: string,
    setQueryLocation: (string) => [],
  } = context;
  const [inputSearchText, setInputSearchText] = useState(queryLocation);
  return (
    <SearchView>
      <Searchbar
        placeholder="Search location"
        value={inputSearchText}
        onChangeText={(text) => setInputSearchText(text)}
        onSubmitEditing={() => setQueryLocation(inputSearchText)}
      />
    </SearchView>
  );
};
