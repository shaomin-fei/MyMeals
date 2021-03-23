//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-20 20:48:17
 */
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLatoFont,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { defaultThem } from "./src/infrastructure/theme/index";
import { AppNavigationBar } from "./src/components/navigation-bar/AppNavigationBar";

import { RestaurantContextProvider } from "./src/services/restaurant/restaurant.context";
import { LocationContextProvider } from "./src/services/location/LocationContext";
import { FavouriteContextProvider } from "./src/services/favourites/FavouriteContext";
import { AuthContextProvider } from "./src/services/authentication/AuthenticationContext";

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

  return (
    <>
      <ThemeProvider theme={defaultThem}>
        <AuthContextProvider>
          <FavouriteContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <AppNavigationBar />

                <StatusBar style="auto" />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouriteContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}
