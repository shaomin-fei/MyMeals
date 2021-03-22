//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-21 13:04:17
 */
import * as React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SettingScreen = (): React.Element<*> => {
  return (
    <SafeAreaView>
      <Text>It's setting</Text>
    </SafeAreaView>
  );
};
