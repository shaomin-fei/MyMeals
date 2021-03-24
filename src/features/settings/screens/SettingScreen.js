//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-21 13:04:17
 */
import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { List } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { SettingMainView } from "../components/SettingScreenStyles";
import {
  AuthContext,
  AuthcontextValue,
} from "../../../services/authentication/AuthenticationContext";

import { AvartaHeader } from "../components/AvartaHeader";
import styled from "styled-components";

const StyledItem = styled(List.Item)`
  padding: 10px;
`;
export const SettingScreen = ({
  navigation,
}: {
  navigation: Object,
}): React.Element<*> => {
  const authContext: AuthcontextValue = useContext(AuthContext);
  const uid = authContext.getUserId();
  const [photoUri, setPhotoUri] = useState("");
  useEffect(() => {
    (async () => {
      const photo = await AsyncStorage.getItem(`@profile_photo_${uid}`);
      setPhotoUri(photo);
    })();
  }, [uid]);
  useFocusEffect(() => {
    (async () => {
      const photo = await AsyncStorage.getItem(`@profile_photo_${uid}`);
      setPhotoUri(photo);
    })();
  });
  return (
    <SettingMainView>
      <TouchableOpacity onPress={() => navigation.navigate("TakePhotoScreen")}>
        <AvartaHeader photoUri={photoUri} />
      </TouchableOpacity>
      <List.Section>
        <StyledItem
          title="Favourites"
          description="View your favourites"
          left={() => <List.Icon icon="heart" />}
          onPress={() => navigation.navigate("SettingFavourites")}
        />
        <StyledItem
          title="Logout"
          left={() => <List.Icon color="#000" icon="account" />}
          onPress={() => authContext.logout()}
        />
      </List.Section>
    </SettingMainView>
  );
};
