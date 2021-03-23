//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-21 13:04:17
 */
import * as React from "react";
import { useContext } from "react";

import { Spacer } from "../../../components/Spacer";
import {
  AccountBackgroundLightUp,
  AccountOptionSelectArea,
  AccountButton,
} from "../../account/components/AccountStyles";
import {
  AuthContext,
  AuthcontextValue,
} from "../../../services/authentication/AuthenticationContext";
export const SettingScreen = (): React.Element<*> => {
  const authContext: AuthcontextValue = useContext(AuthContext);
  return (
    <AccountBackgroundLightUp>
      <AccountOptionSelectArea>
        <Spacer>
          <AccountButton onPress={() => authContext.logout()}>
            Logout
          </AccountButton>
        </Spacer>
      </AccountOptionSelectArea>
    </AccountBackgroundLightUp>
  );
};
