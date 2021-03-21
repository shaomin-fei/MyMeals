import React from "react";
import styled from "styled-components";

import { getStatusBarHeight } from "react-native-status-bar-height";

const SafeView = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
`;
export const SafeAreaViewWrapper = ({ style = {}, ...props }) => {
  return <SafeView>{props.children}</SafeView>;
};
