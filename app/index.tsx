import { Image, StyleSheet, Platform } from 'react-native';

import SplashScreen from './splash';
import LoginScreen from './login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './homePage';
import SessionLogs from './sessionLogs';
import DriveManually from './driveManually';
import AutoDrive from './autoDrive';
import Setting from './settings';
import VehicleData from './vehicleData';

export type RootStackParamList = {
  Start: undefined;
  Login: undefined;
  HomePage: { vehicleID: string };
  AutoDrive: undefined;
  DriveManually: undefined;
  SessionLogs: undefined;
  Setting: undefined;
  VehicleData: undefined;
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
        <Stack.Screen name="SessionLogs" component={SessionLogs} />
        <Stack.Screen name="DriveManually" component={DriveManually} />
        <Stack.Screen name="AutoDrive" component={AutoDrive} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="VehicleData" component={VehicleData} />
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
