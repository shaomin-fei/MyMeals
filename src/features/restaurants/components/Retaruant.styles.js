//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-20 21:02:36
 */
import * as React from "react";
import styled from "styled-components";
import { FlatList } from "react-native";

export const ListView: React.ComponentType<any> = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  flex: 1;
`;
export const FatListVWithPadding: React.ComponentType<any> = styled(
  FlatList
).attrs((props) => ({
  contentContainerStyle: { padding: 16, paddingTop: 0 },
}))`
  flex: 1;
`;
