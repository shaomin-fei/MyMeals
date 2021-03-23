//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-23 10:06:34
 */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomNavitationBarNormal } from "./BottomNavigationBarNormal";
import {
  AuthContext,
  AuthcontextValue,
} from "../../services/authentication/AuthenticationContext";
import { SettingScreen } from "../../features/restaurants/screens/SettingScreen";
import { MapScreen } from "../../features/Map/screens/MapScreen";
import { RestaurantNavigator } from "../../components/navigation-bar/RestaurantNavigator";
import { NavTabInfo } from "../../components/navigation-bar/NavTabInfo";
import { AccountNavigator } from "../navigation-bar/AccountNavigatior";

const screens = [];
const restaurantScreen = new NavTabInfo();
restaurantScreen.name = "Restaurant";
restaurantScreen.componentFunc = RestaurantNavigator;
screens.push(restaurantScreen);

const mapScreen = new NavTabInfo();
mapScreen.name = "Map";
mapScreen.componentFunc = MapScreen;
screens.push(mapScreen);

const settingScreen = new NavTabInfo();
settingScreen.name = "Setting";
settingScreen.componentFunc = SettingScreen;
screens.push(settingScreen);

export function AppNavigationBar(): React.Element<*> {
  const contextAuth: AuthcontextValue = React.useContext(AuthContext);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {contextAuth.isAuth ? (
          <BottomNavitationBarNormal tabScreens={screens} />
        ) : (
          <AccountNavigator />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
