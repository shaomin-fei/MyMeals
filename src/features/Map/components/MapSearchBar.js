//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 16:13:11
 */
import * as React from "react";
import { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/LocationContext";
const SearchView = styled.View`
  padding: ${(props) => props.theme.sizes.normal};
  width: 100%;
  position: absolute;
  z-index: 999;
  margin-top: 40px;
`;
const StyledSearchBar = styled(Searchbar)`
  border-radius: 15px;
`;
export const MapSearchBar = (): React.Element<*> => {
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

  return (
    <SearchView>
      <StyledSearchBar
        icon="map"
        placeholder="Search location"
        value={inputSearchText}
        onChangeText={(text) => setInputSearchText(text)}
        onSubmitEditing={() => setQueryLocation(inputSearchText)}
      />
    </SearchView>
  );
};
