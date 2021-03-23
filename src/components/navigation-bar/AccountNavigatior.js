//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-23 10:58:50
 */
import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/AccountScreen";
import { LoginScreen } from "../../features/account/screens/LoginScreen";
import { RegisterScreen } from "../../features/account/screens/RegisterScreen";

const StactNavigator = createStackNavigator();
export function AccountNavigator(): React.Element<*> {
  return (
    <StactNavigator.Navigator headerMode="none">
      <StactNavigator.Screen name="Main" component={AccountScreen} />
      <StactNavigator.Screen name="Login" component={LoginScreen} />
      <StactNavigator.Screen name="Register" component={RegisterScreen} />
    </StactNavigator.Navigator>
  );
}
