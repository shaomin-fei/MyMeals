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
  accountLogout,
  setAutStateChangeCallBack,
} from "./AuthenticationService";

export const AuthContext: React.Context<any> = createContext();
export class AuthcontextValue {
  user: Object | null;
  isLogging: boolean = false;
  error: Object = "";
  isAuth: boolean = false;
  logIn: (string, string) => void;
  register: (string, string) => void;
  logout: () => void;
  getUserId(): string {
    if (this.user && this.user.uid) {
      return this.user.uid;
    }
    return "";
  }
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
  const authStateChangedCallback = (usr) => {
    if (usr) {
      setUser(usr);
      setIsLogging(false);
      setIsAuth(true);
    } else {
      setIsLogging(false);
      setIsAuth(false);
      setUser(null);
    }
  };
  setAutStateChangeCallBack(authStateChangedCallback);
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
    }, 0);
  };
  const logout = () => {
    accountLogout();
    setIsAuth(false);
    setUser(null);
  };
  const contextValue = new AuthcontextValue();
  contextValue.isLogging = isLogging;
  contextValue.error = error;
  contextValue.logIn = logIn;
  contextValue.user = user;
  contextValue.isAuth = isAuth;
  contextValue.register = register;
  contextValue.logout = logout;
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
