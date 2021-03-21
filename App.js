//@flow
import { StatusBar } from "expo-status-bar";
import * as React from "react";

import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen";
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
        <RestaurantScreen />
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
