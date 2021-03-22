//@flow
import * as React from "react";
import styled from "styled-components";

import { getStatusBarHeight } from "react-native-status-bar-height";

const SafeView = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
`;
export const SafeAreaViewWrapper = (props: Object): React.Element<*> => {
  return <SafeView>{props.children}</SafeView>;
};
