//@flow
import * as React from "react";
import styled from "styled-components";
import { defaultThem } from "../../infrastructure/theme/index";
type Props = {
  vairant: string,
  children?: Object | null,
};
const defaultTextTheme = (theme: typeof defaultThem): string => {
  return `
    font-family:${theme.fonts.body};
    font-weight:${theme.fontWeights.regular};
    color:${theme.colors.text.primary};
    margin-top:0px;
    margin-bottom:0px;
    `;
};
const body = (theme: typeof defaultThem) => {
  return `font-size:${theme.fontSizes.body};`;
};
const label = (theme: typeof defaultThem) => {
  return `
    font-size:${theme.fontSizes.title};
    font-family:${theme.fonts.heading}
    `;
};
const caption = (theme: typeof defaultThem) => {
  return `
    font-size:${theme.fontSizes.caption};
    font-weight:${theme.fontWeights.bold};
    `;
};
const error = (theme: typeof defaultThem) => {
  return `color:${theme.colors.text.error};`;
};
const hint = (theme: typeof defaultThem) => {
  return `font-size:${theme.fontSizes.body};`;
};
const variants = {
  body,
  label,
  caption,
  error,
  hint,
};
const StyledText = styled.Text`
  ${({ theme }) => defaultTextTheme(theme)}
  ${({ theme, vairant }) => variants[vairant](theme)}
`;
export const Text = (props: Props): React.Element<*> => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

Text.defaultProps = {
  vairant: "body",
  children: null,
};
