//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-23 09:36:54
 */
import * as React from "react";
import { createContext, useState } from "react";

import {
  loginService,
  register as registerAccount,
} from "./AuthenticationService";

export const AuthContext: React.Context<any> = createContext();
export class AuthcontextValue {
  user: Object | null;
  isLogging: boolean = false;
  error: Object = "";
  isAuth: boolean = false;
  logIn: (string, string) => void;
  register: (string, string) => void;
  logOut: () => void;
}
export const AuthContextProvider = ({
  children,
}: {
  children: Object,
}): React.Element<*> => {
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const register = (username: string, password: string): void => {
    setIsLogging(true);
    setTimeout(() => {
      registerAccount(username, password)
        .then((result) => {
          setUser(result);
          setIsAuth(true);
          setError("");
        })
        .catch((errorInfo) => {
          setError(errorInfo.message.toString());
        })
        .finally(() => {
          setIsLogging(false);
        });
    }, 2000);
  };
  const logIn = (username: string, password: string): void => {
    setIsLogging(true);
    setTimeout(() => {
      loginService(username, password)
        .then((result) => {
          setUser(result);
          setIsAuth(true);
          setError("");
        })
        .catch((errorInfo) => {
          setError(errorInfo.message.toString());
        })
        .finally(() => {
          setIsLogging(false);
        });
    }, 2000);
  };
  const contextValue = new AuthcontextValue();
  contextValue.isLogging = isLogging;
  contextValue.error = error;
  contextValue.logIn = logIn;
  contextValue.user = user;
  contextValue.isAuth = isAuth;
  contextValue.register = register;
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
