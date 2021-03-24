//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-23 22:09:54
 */
import * as React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { SettingScreen } from "../../features/settings/screens/SettingScreen";

import { FavouriteDetailScreen } from "../../features/settings/screens/FavouriteDetailsScreen";

const SetingsStack = createStackNavigator();
export const SetingsNavigation = (): React.Element<*> => {
  return (
    <SetingsStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <SetingsStack.Screen name="SettingMain" component={SettingScreen} />
      <SetingsStack.Screen
        name="SettingFavourites"
        component={FavouriteDetailScreen}
      />
    </SetingsStack.Navigator>
  );
};
