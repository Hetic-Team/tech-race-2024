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
  MoreInfo: { vehicleIP: string };
  Setting: { vehicleIP: string };
  VehicleData: { vehicleIP: string };
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
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="VehicleData" component={VehicleData} />
        <Stack.Screen name="SessionLog" component={SessionLog} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}