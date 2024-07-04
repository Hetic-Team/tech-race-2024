import { Colors } from "@/constants/Colors";
import React, { useEffect } from "react";
import Orientation from "react-native-orientation-locker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Provider } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/index";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import { Joystick } from "@/components/Joystick";

import JoystickSecond from "../components/JoystickSecond";
import SettingsPopup from "@/popups/SettingsPopup";
import { JoystickCamera } from "@/components/JoystickCamera";

export default function DriveManually() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleStart = () => {
    console.log("Button Start");
    navigation.navigate("Login");
  };
  useEffect(() => {
    // Lock the orientation to landscape when the screen is focused
    Orientation.lockToLandscape();

    // Unlock orientation when the screen is unfocused
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <Provider>
      <SafeAreaView style={styles.container}>
        <View style={styles.joystick}>
                  <Joystick />
                
              </View>
              <View style={styles.joystickCamera}>
              <JoystickSecond />
                
              </View>
       
        <SettingsPopup />
        
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  joystick: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  joystickCamera: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },

});
