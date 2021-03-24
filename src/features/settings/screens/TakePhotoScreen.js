//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-24 09:26:00
 */
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { Text } from "../../../components/typography/Text";

import {
  AuthContext,
  AuthcontextValue,
} from "../../../services/authentication/AuthenticationContext";

const Container = styled.View`
  flex: 1;
`;

const StyledButton = styled(Button).attrs({
  dark: true,
  icon: "camera",
})`
  padding: 10px;
  flex: 1;
  justify-content: center;
`;
const StyledCamera = styled(Camera)`
  width: 100%;
  height: 90%;
  z-index: 0;
`;
const StyledTouchable = styled.TouchableOpacity`
  flex: 1;
  z-index: 999;
  border-width: 2px;
  border-color: red;
`;
export const TakePhotoScreen = ({
  navigation,
}: {
  navigation: Object,
}): React.Element<*> => {
  const [cameraReady, setCameraReady] = useState(false);
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);

  const authContext: AuthcontextValue = React.useContext(AuthContext);
  const uid = authContext.getUserId();
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const snap = async () => {
    console.log("snapped");
    if (cameraRef.current && cameraReady) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`@profile_photo_${uid}`, photo.uri);
      navigation.goBack();
    }
  };
  return (
    <Container>
      {hasPermission ? (
        <StyledTouchable
          onPress={() => {
            snap();
          }}
        >
          <StyledCamera
            ref={(camera) => (cameraRef.current = camera)}
            type={Camera.Constants.Type.front}
            onCameraReady={() => {
              setCameraReady(true);
            }}
            ratio="16:9"
            autoFocus={true}
          />
          <StyledButton mode="contained">Take a Photo</StyledButton>
        </StyledTouchable>
      ) : (
        <View>
          <Text vairant="error">
            Don't have permission to access the camera
          </Text>
        </View>
      )}
    </Container>
  );
};
