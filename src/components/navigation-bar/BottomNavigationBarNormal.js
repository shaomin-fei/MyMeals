//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-21 11:37:11
 */
import * as React from "react";

//import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

import type { NavTabInfo } from "./NavTabInfo";
const Tab = createBottomTabNavigator();
type Props = {
  // When you use the name of your class in an annotation, it means an instance of your class:
  tabScreens: Array<NavTabInfo>,
};
// const styles = StyleSheet.create({
//   NavContainer: {
//     flex: 1,
//   },
// });
const tabIon = {
  Restaurant: "md-restaurant",
  Setting: "md-settings",
  Map: "md-map",
};
const createTabBarOpt = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = tabIon[route.name];
      if (focused) {
        iconName = iconName + "-outline"; // we choose focued icon for button whose name is appended by -outline
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  };
};
export function BottomNavitationBarNormal(props: Props): React.Element<*> {
  const { tabScreens } = props;
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato", //the colore of selected tab
        inactiveTintColor: "gray", //the color of unselected tab
      }}
      screenOptions={createTabBarOpt}
    >
      {tabScreens.map((screen) => {
        return (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.componentFunc}
          />
        );
      })}
    </Tab.Navigator>
  );
}
