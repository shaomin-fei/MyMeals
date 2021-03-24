//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 13:40:12
 */
import * as React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantScreen } from "../../features/restaurants/screens/RestaurantScreen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/RestaurantDetailScreen";
const RestaurantStack = createStackNavigator();
export const RestaurantNavigator = (): React.Element<*> => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen name="restaurant" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
