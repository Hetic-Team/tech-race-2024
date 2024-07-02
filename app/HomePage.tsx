import Button from '@/components/Button';
import { Input } from '@/components/Input';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '.';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type HomePageRouteProp = RouteProp<RootStackParamList, 'HomePage'>;

export default function HomePage() {
    const route = useRoute<HomePageRouteProp>();
    const { vehicleID } = route.params;

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    const handleSessionLogs = () => {
        console.log("Button Session")
        navigation.navigate('SessionLogs');
     }

     const handleDriveManually = () => {
        console.log("Button Drive Manually")
        navigation.navigate('DriveManually');
     }

     const handleAutoDrive = () => {
        console.log("Button Auto Drive")
        navigation.navigate('AutoDrive');
     }

     const handleSetting = () => {
        console.log("Button Setting")
        navigation.navigate('Setting');
     }

     const handleVehicleData = () => {
        console.log("Button Vehicle Data")
        navigation.navigate('VehicleData');
     }

    return (
        <View style={styles.container}>
            <Text style={styles.vehicleId}>Vehicle ID : {vehicleID}</Text>
            <Button 
                label="VEHICLE DATA" 
                onClick={handleVehicleData}
            />
             <Button 
                label="DRIVE MANUALLY" 
                onClick={handleDriveManually}
            />
             <Button 
                label="AUTO DRIVE" 
                onClick={handleAutoDrive}
            />
             <Button 
                label="SESSION LOGS" 
                onClick={handleSessionLogs}
            />
             <Button 
                label="SETTINGS" 
                onClick={handleSetting}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.dark.mainBackground,
        paddingHorizontal: 40,
        gap: wp(15)
    },
    titleLogin: {
        top: 60,
        left: 40,
        position: 'absolute',
        fontSize: 40,
        color: Colors.dark.text,
    },
    subtitleLogin: {
        top: 120,
        left: 40,
        position: 'absolute',
        fontSize: 16,
        color: Colors.dark.text,
    },
    vehicleId :{
        color: '#ffffff',
        fontSize: 20,
    }
});