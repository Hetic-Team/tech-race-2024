
import { Colors } from "@/constants/Colors";
import React, { useEffect } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
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
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleStart = () => {
    console.log("Button Start");
    navigation.navigate("Login");
  };
  const formatHtml = () => {
    const googleUrl = 'http://192.168.155.10:7000/';
    return (
        `<html>
            <body>
            
                <iframe src="${googleUrl}" width="700px" height="700px" style="position:relative; top: 500; left: 0; right: 0; bottom: 0;"/>
            </body>
        </html>`
    );
}
  useEffect(() => {
    // // Lock the orientation to landscape when this component mounts
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    // // Unlock orientation to all directions when this component unmounts
    // return () => {
    //   ScreenOrientation.unlockAsync();
    // };
  }, []);

  return (
    <Provider>
      <SafeAreaView style={styles.container}>
      <WebView
               style={[
                
                styles.cameraPlaceholder,
                {
                    transform: [{ skewX: '-45deg' }, { skewY: '45deg' }],
                    webView: {
                        width: '100%',
                        height: '100%',
                    },
                },
                
            ]}
                originWhitelist={['*']}
                source={{ html: formatHtml() }}
            />
        <View style={styles.joystick}>
          <JoystickPad/>
                
              </View>
              <View style={styles.joystickCamera}>
              <JoystickCamera />
                
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
webView: {
    width: '100%',
    height: '100%',
},
cameraPlaceholder: {
    
   
},
});
