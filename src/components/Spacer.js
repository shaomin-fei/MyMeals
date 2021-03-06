//@flow
import * as React from "react";
import styled, { useTheme } from "styled-components";

import { defaultThem } from "../infrastructure/theme/index";
// const sizeVairable = {
//   small: sizes.sm,
//   middle: sizes.normal,
//   large: sizes.lg,
// };
const positionVariable = {
  top: "margin-top",
  bottom: "margin-bottom",
  left: "margin-left",
  right: "margin-right",
};

const getProperView = (
  position: string,
  size: string,
  theme: typeof defaultThem
): string => {
  //console.log(`${positionVariable[position]}:${theme.sizes[size]}`);
  return `${positionVariable[position]}:${theme.sizes[size]}`;
};
type Props = {
  position: string,
  size: string,
  children: Object,
};
const SpacerView = styled.View`
  ${({ variant }) => variant}
`;
// const SpacerView: Object = styled.View`
//   ${({ position, size, theme }) => getProperView(position, size, theme)}
// `;

export const Spacer = (props: Props): React.Element<*> => {
  const theme = useTheme();
  const variant = getProperView(props.position, props.size, theme);
  return <SpacerView variant={variant}>{props.children}</SpacerView>;
  // console.log(props);
  // return <SpacerView {...props}>{props.children}</SpacerView>;
};
//this way can't work on android,actually we can't directly export sytled-componet like below on Android
//We should wrap it in another component like above. !!!!!!!!VERY IMPORTANT

// export const Spacer: Object = styled.View`
//   ${({ position, size, theme }) => getProperView(position, size, theme)}
// `;

Spacer.defaultProps = {
  position: "top",
  size: "normal",
  children: null,
};
