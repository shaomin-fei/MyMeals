//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-20 20:48:17
 */
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLatoFont,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { RestaurantNavigator } from "./src/components/navigation-bar/RestaurantNavigator";
import { SettingScreen } from "./src/features/restaurants/screens/SettingScreen";
import { MapScreen } from "./src/features/restaurants/screens/MapScreen";
import { defaultThem } from "./src/infrastructure/theme/index";
import { BottomNavitationBarNormal } from "./src/components/navigation-bar/BottomNavigationBarNormal";
import { NavTabInfo } from "./src/components/navigation-bar/NavTabInfo";
import { RestaurantContextProvider } from "./src/services/restaurant/restaurant.context";
import { LocationContextProvider } from "./src/services/location/LocationContext";
export default function App(): React.Element<*> | null {
  const [oswaldFontsLoaded] = useOswaldFont({
    Oswald_400Regular,
  });
  const [latoFontsLoaded] = useLatoFont({
    Lato_400Regular,
  });
  if (!oswaldFontsLoaded || !latoFontsLoaded) {
    //loading font is async, sometime, loading is not completed, but app is loading, then will report error
    return <></>;
  }
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

  return (
    <>
      <ThemeProvider theme={defaultThem}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <BottomNavitationBarNormal tabScreens={screens} />

            <StatusBar style="auto" />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
