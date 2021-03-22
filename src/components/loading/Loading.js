//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-21 23:06:26
 */
import * as React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
`;
const Indicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;
/**
 * @Author:Shaomin Fei
 * @Description: when size is 50, margin-left should be -25 to make sure the circle is in the center
 * @param {*} React
 * @return {*}
 */
export const Loading = (): React.Element<*> => {
  return (
    <LoadingContainer>
      <Indicator size={50} animating={true} color={Colors.blue300} />
    </LoadingContainer>
  );
};
