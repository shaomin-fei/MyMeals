//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-23 12:05:23
 */
import * as React from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";

import { Button } from "react-native-paper";
import { Input, Icon } from "react-native-elements";

export const AccountBackground: React.ComponentType<any> = styled.ImageBackground.attrs(
  {
    source: require("../../../../assets/home_bg.jpg"),
  }
)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const AccountBackgroundCover: React.ComponentType<any> = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountOptionSelectArea: React.ComponentType<any> = styled.View`
  padding: 20px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.9);
`;
export const AccountButton: React.ComponentType<any> = styled(Button).attrs(
  (props) => ({
    color: props.theme.colors.brand.primary,
    mode: "contained",
  })
)`
  padding: ${(props) => props.theme.sizes.sm};
`;

export const AppTitle: React.ComponentType<any> = styled.Text`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.h4};
  z-index: 999;
`;

const StyledUserName = styled(Input).attrs({
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: "black",
    borderLeftWidth: 1,
    height: 50,
    width: 300,
    backgroundColor: "white",
  },
  leftIconContainerStyle: {
    marginRight: 10,
  },
  containerStyle: { paddingHorizontal: 0 },
})``;

//type=email, password
export const AccountInputBox = ({
  errorMsg,
  setTextValue,
  textValue,
  placehold,
  type,
  atutoFocus,
}: {
  errorMsg?: string,
  textValue: string,
  type: string,
  atutoFocus?: boolean,
  placehold?: string,
  setTextValue: (string) => void,
}): React.Element<*> => {
  let leftIcon = null,
    placeholder = "",
    secureTextEntry = false;
  if (type === "email") {
    placeholder = placehold || "Please input email";
    leftIcon = (
      <Icon
        name="email-outline"
        type="material-community"
        color="black"
        size={25}
      />
    );
  } else if (type === "password") {
    placeholder = placehold || "Please input password";
    secureTextEntry = true;
    leftIcon = (
      <Icon name="lock" type="simple-line-icon" color="black" size={25} />
    );
  }
  return (
    <StyledUserName
      leftIcon={leftIcon}
      value={textValue}
      placeholder={placeholder}
      placeholderTextColor="black"
      autoCapitalize="none"
      autoCorrect={false}
      keyboardAppearance="light"
      keyboardType="default"
      returnKeyType="next"
      secureTextEntry={secureTextEntry}
      errorMessage={errorMsg}
      onChangeText={(txt) => setTextValue(txt)}
      autoFocus={atutoFocus}
    />
  );
};

export const AccountBackgroundLightUp = ({
  children,
}: {
  children: Object,
}): React.Element<*> => {
  return (
    <AccountBackground>
      <AccountBackgroundCover>{children}</AccountBackgroundCover>
    </AccountBackground>
  );
};

const AnimationWrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 40%;
  top: 30px;
  padding: ${(props) => props.theme.sizes.sm};
`;

export const AccountAnimation = ({
  children,
}: {
  children?: Object,
}): React.Element<*> => {
  return (
    <AnimationWrapper>
      <LottieView
        source={require("../../../../assets/watermelon.json")}
        autoPlay
        loop
        resizeMode="cover"
      />
    </AnimationWrapper>
  );
};
