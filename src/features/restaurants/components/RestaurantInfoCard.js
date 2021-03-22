//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-20 21:02:36
 */
import * as React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";

import Star from "../../../../assets/star";
import Open from "../../../../assets/open";
import { RestaurantInfoDetail } from "../../../flow-types/RestaurantInfoType";
import { Text } from "../../../components/typography/Text";
type Props = {
  restaurantInfoDetail: RestaurantInfoDetail,
};
const RestaurandCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.sizes.normal};
  border-radius: 10px;
  border-width: 1px;
  border-color: #ccc;
`;
const RestaurandCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes.normal};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;
const RestaurantAddress = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.primary};
`;
const RestaurantBaseInfo = styled.View`
  padding: ${(props) => props.theme.sizes.normal};
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.sizes.sm};
  padding-bottom: ${(props) => props.theme.sizes.sm};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
// const OpenState = styled.View`
//   margin-left: auto;
//   margin-right: 20px;
// `;
const OpenState = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantInfoCard = (props: Props): React.Element<*> => {
  const { restaurantInfoDetail } = props;
  const starArray = [];
  for (let i = 0; i < Math.round(restaurantInfoDetail.rating); i++) {
    starArray.push(<SvgXml key={i} width={20} height={20} xml={Star} />);
  }
  const photoUrl =
    restaurantInfoDetail.photos.length > 0
      ? restaurantInfoDetail.photos[0]
      : "https://picsum.photos/700";
  return (
    <RestaurandCard elevation={5}>
      <RestaurandCardCover source={{ uri: photoUrl }} />
      <RestaurantBaseInfo>
        <RestaurantTitle vairant="body">
          {restaurantInfoDetail.name}
        </RestaurantTitle>
        <Section>
          <Rating>
            {starArray.map((star) => {
              return star;
            })}
          </Rating>
          <OpenState>
            {/* <RestaurantBaseInfo position="bottom" size="normal"> */}
            {restaurantInfoDetail.isOpenNow && (
              <SvgXml width={20} height={20} xml={Open} />
            )}
            {/* </RestaurantBaseInfo> */}
          </OpenState>
        </Section>
        {/* <Spacer position="bottom" size="xl">
          <RestaurantTitle>xxxx</RestaurantTitle>
        </Spacer> */}
        <Text vairant="caption">{restaurantInfoDetail.address}</Text>
      </RestaurantBaseInfo>
    </RestaurandCard>
  );
};
