//@flow
export class colors {
  static brand: { primary: string, secondary: string, muted: string } = {
    primary: "#2182BD",
    secondary: "#5282BD",
    muted: "#C6DAF7",
  };
  static ui: {
    primary: string,
    secondary: string,
    tertiary: string,
    quaternary: string,
    disabled: string,
    error: string,
    success: string,
  } = {
    primary: "#262626",
    secondary: "#757575",
    tertiary: "#F1F1F1",
    quaternary: "#FFFFFF",
    disabled: "#DEDEDE",
    error: "#D0421B",
    success: "#138000",
  };
  static bg: { primary: string, secondary: string } = {
    primary: "#FFFFFF",
    secondary: "#F1F1F1",
  };
  static text: {
    primary: string,
    secondary: string,
    disabled: string,
    inverse: string,
    error: string,
    success: string,
  } = {
    primary: "#262626",
    secondary: "#757575",
    disabled: "#9C9C9C",
    inverse: "#FFFFFF",
    error: "#D0421B",
    success: "#138000",
  };
}
