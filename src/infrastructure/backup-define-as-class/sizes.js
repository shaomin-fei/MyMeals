//@flow
export class lineHeights {
  static title: string = "28px";
  static copy: string = "20px";
}

export class sizes {
  static None: string = "0px";
  static ssm: string = "4px";
  static sm: string = "8px";
  static normal: string = "16px";
  static lg: string = "32px";
  static xl: string = "64px";
  static xxl: string = "128px";
  static getSize(size: string): string {
    switch (size) {
      case "ssm":
        return sizes.ssm;
      case "sm":
        return sizes.sm;
      case "normal":
        return sizes.normal;
      case "lg":
        return sizes.lg;
      case "xl":
        return sizes.xl;
      case "xxl":
        return sizes.xxl;
      default:
        return sizes.None;
    }
  }
} //["0px", "4px", "8px", "16px", "32px", "64px"];
