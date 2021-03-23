//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 17:58:01
 */
import * as React from "react";
import { RestaurantInfoDetail } from "../flow-types/RestaurantInfoType";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const Container = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const ContainerWebView = styled(WebView)`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;

const ImageInfo = styled.Image`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;
const TitleInfo = styled.Text`
  font-weight: bold;
`;
export const CompactRestaurantInfo = ({
  restaurantDetail,
  isMap,
}: {
  restaurantDetail: RestaurantInfoDetail,
  isMap?: boolean,
}): React.Element<*> => {
  return (
    <Container>
      {Platform.OS === "android" && isMap ? (
        <ContainerWebView source={{ uri: restaurantDetail.photos[0] }} />
      ) : (
        <ImageInfo source={{ uri: restaurantDetail.photos[0] }} />
      )}

      <TitleInfo>{restaurantDetail.name}</TitleInfo>
    </Container>
  );
};
