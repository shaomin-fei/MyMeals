//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-23 23:13:16
 */
import * as React from "react";
import { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const FadeInView = ({
  children,
}: {
  children: Object,
}): React.Element<*> => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const fadeIn = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    };
    fadeIn();
  }, [fadeAnim]);

  //   const fadeOut = () => {
  //     // Will change fadeAnim value to 0 in 5 seconds
  //     Animated.timing(fadeAnim, {
  //       toValue: 0,
  //       duration: 2000,
  //       useNativeDriver: true,
  //     }).start();
  //   };
  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim, // Bind opacity to animated value
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};
