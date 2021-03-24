//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-23 11:49:51
 */
import * as React from "react";

import {
  AccountBackgroundLightUp,
  AccountOptionSelectArea,
  AccountButton,
  AppTitle,
  AccountAnimation,
} from "../components/AccountStyles";
import { Spacer } from "../../../components/Spacer";

export const AccountScreen = ({
  navigation,
}: {
  navigation: Object,
}): React.Element<*> => {
  return (
    <AccountBackgroundLightUp>
      <AccountAnimation />
      <Spacer>
        <AppTitle>Meals To Go</AppTitle>
      </Spacer>
      <AccountOptionSelectArea>
        <Spacer>
          <AccountButton
            icon="lock-open-outline"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AccountButton>
        </Spacer>
        <Spacer>
          <AccountButton
            icon="account"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AccountButton>
        </Spacer>
      </AccountOptionSelectArea>
    </AccountBackgroundLightUp>
  );
};
