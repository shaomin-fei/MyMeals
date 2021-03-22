//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-21 13:43:49
 */
import * as React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const MapScreen = (): React.Element<*> => {
  return (
    <SafeAreaView>
      <Text>It's Map</Text>
    </SafeAreaView>
  );
};
