//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-23 11:48:53
 */
import * as React from "react";
import { useState, useContext, useEffect } from "react";

import {
  AccountBackgroundLightUp,
  AccountOptionSelectArea,
  AccountButton,
  AppTitle,
  AccountInputBox,
} from "../components/AccountStyles";
import {
  AuthContext,
  AuthcontextValue,
} from "../../../services/authentication/AuthenticationContext";

import { Loading } from "../../../components/loading/Loading";
import { Spacer } from "../../../components/Spacer";

export const RegisterScreen = ({
  navigation,
}: {
  navigation: Object,
}): React.Element<*> => {
  const [userInput, setUserInput] = useState("");
  const [inputError, setInputError] = useState("");
  const [pwdInput, setPwdInput] = useState("");
  const [pwdCofirmInput, setPwdConfirmInput] = useState("");
  const authContext: AuthcontextValue = useContext(AuthContext);
  const logErrorString = authContext.error;
  useEffect(() => {
    if (!logErrorString) {
      return;
    }
    setInputError(logErrorString);
  }, [logErrorString]);
  const checkInput = (): boolean => {
    if (!userInput) {
      setInputError("Please input user name");
      return false;
    }
    if (userInput.indexOf("@") === -1) {
      setInputError("Please input correct email");
      return false;
    }
    if (!pwdInput) {
      setInputError("Please input password");
      return false;
    }
    if (!pwdCofirmInput) {
      setInputError("Please confirm password");
      return false;
    }
    if (pwdCofirmInput !== pwdInput) {
      setInputError("Th password is not the same");
      return false;
    }
    if (inputError) {
      setInputError("");
    }
    return true;
  };
  const register = () => {
    if (!checkInput()) {
      return;
    }
    authContext.register(userInput, pwdInput);
  };
  return (
    <AccountBackgroundLightUp>
      <Spacer>
        <AppTitle>Meals To Go</AppTitle>
      </Spacer>
      <AccountOptionSelectArea>
        <Spacer>
          <AccountInputBox
            textValue={userInput}
            type="email"
            setTextValue={setUserInput}
          />
        </Spacer>
        <Spacer>
          <AccountInputBox
            textValue={pwdInput}
            type="password"
            setTextValue={setPwdInput}
          />
        </Spacer>
        <Spacer>
          <AccountInputBox
            errorMsg={inputError}
            textValue={pwdCofirmInput}
            type="password"
            placehold="Confirm password"
            setTextValue={setPwdConfirmInput}
          />
        </Spacer>
        <Spacer>
          {authContext.isLogging ? (
            <Loading />
          ) : (
            <AccountButton icon="lock-open-outline" onPress={() => register()}>
              Register
            </AccountButton>
          )}
        </Spacer>
      </AccountOptionSelectArea>
      <Spacer>
        <AccountButton onPress={() => navigation.navigate("Main")}>
          Back
        </AccountButton>
      </Spacer>
    </AccountBackgroundLightUp>
  );
};
