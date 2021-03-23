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

import { RestaurantContextProvider } from "../../services/restaurant/restaurant.context";
import { LocationContextProvider } from "../../services/location/LocationContext";
import { FavouriteContextProvider } from "../../services/favourites/FavouriteContext";
import { RestaurantScreen } from "../../features/restaurants/screens/RestaurantScreen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/RestaurantDetailScreen";
const RestaurantStack = createStackNavigator();
export const RestaurantNavigator = (): React.Element<*> => {
  return (
    <FavouriteContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <RestaurantStack.Navigator
            headerMode="none"
            screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
          >
            <RestaurantStack.Screen
              name="restaurant"
              component={RestaurantScreen}
            />
            <RestaurantStack.Screen
              name="RestaurantDetail"
              component={RestaurantDetailScreen}
            />
          </RestaurantStack.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouriteContextProvider>
  );
};
