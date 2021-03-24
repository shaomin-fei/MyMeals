//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-23 22:19:56
 */
import * as React from "react";
import { useContext } from "react";
import { Avatar } from "react-native-paper";
import styled from "styled-components/native";

import { AuthContext } from "../../../services/authentication/AuthenticationContext";
import type { AuthcontextValue } from "../../../services/authentication/AuthenticationContext";
const AvartaView = styled.View`
  align-items: center;
  width: 100%;
  height: 30%;
  padding: ${(props) => props.theme.sizes.normal};
`;
const TextEmail = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
`;
export const AvartaHeader = (): React.Element<*> => {
  const authContext: AuthcontextValue = useContext(AuthContext);

  return (
    <AvartaView>
      <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
      <TextEmail>
        {authContext.user &&
          authContext.user.user &&
          authContext.user.user.email}
      </TextEmail>
    </AvartaView>
  );
};
