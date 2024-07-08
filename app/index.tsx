import { Image, StyleSheet, Platform } from 'react-native';

import SplashScreen from './splash';
import LoginScreen from './login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './homePage';
import DriveManually from './driveManually';
import AutoDrive from './autoDrive';
import Setting from './settings';
import MoreInfo from './moreInfo';
import VehicleData from './vehicleData';
import SessionLog from './sessionLog';

export type RootStackParamList = {
  Start: undefined;
  Login: undefined;
  HomePage: { vehicleIP: string };
  AutoDrive: undefined;
  DriveManually: undefined;
  MoreInfo: undefined;
  Setting: undefined;
  VehicleData: undefined;
  SessionLog: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start"
       screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name="Start" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MoreInfo" component={MoreInfo} />
        <Stack.Screen name="DriveManually" component={DriveManually} />
        <Stack.Screen name="AutoDrive" component={AutoDrive} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="VehicleData" component={VehicleData} />
        <Stack.Screen name="SessionLog" component={SessionLog} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
