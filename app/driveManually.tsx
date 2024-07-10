import { Colors } from "@/constants/Colors";
import React, { useEffect } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
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

// import { Joystick } from "@/components/Joystick";

// import JoystickSecond from "../components/JoystickSecond";
import SettingsPopup from "@/popups/SettingsPopup";
import { JoystickPad } from "@/components/JoystickPad";
import { JoystickCamera } from "@/components/JoystickCamera";

export default function DriveManually() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleStart = () => {
    console.log("Button Start");
    navigation.navigate("Login");
  };
  useEffect(() => {
    // // Lock the orientation to landscape when this component mounts
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    // // Unlock orientation to all directions when this component unmounts
    // return () => {
    //   ScreenOrientation.unlockAsync();
    // };
  }, []);

  return (
    //<Provider>
      <SafeAreaView style={styles.container}>
        <View style={styles.joystick}>
          <JoystickPad/>
                
              </View>
              <View style={styles.joystickCamera}>
              <JoystickCamera />
                
              </View>
       
        <SettingsPopup />
        
      </SafeAreaView>
    //</Provider>
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
