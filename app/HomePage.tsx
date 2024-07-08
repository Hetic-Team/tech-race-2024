import Button from '@/components/Button';
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
    const { vehicleIP } = route.params;

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    const handleMoreInfo = () => {
        console.log("Button More Info")
        navigation.navigate('MoreInfo');
     }

     const handleDriveManually = () => {
        console.log("Button Drive Manually")
        navigation.navigate('DriveManually');
     }

     const handleDriveAuto = () => {
        console.log("Button Auto Drive")
        navigation.navigate('AutoDrive');
     }

     const handleSetting = () => {
        console.log("Button Setting")
        navigation.navigate('Settings');
     }

    

    return (
        <View style={styles.container}>
            <Text style={styles.vehicleId}>Vehicle ID : {vehicleIP}</Text>
           
             <Button 
                label="Drive Manually" 
                onClick={handleDriveManually}
            />
             <Button 
                label="Drive Auto" 
                onClick={handleDriveAuto}
            />
             <Button 
                label="More Info" 
                onClick={handleMoreInfo}
            />
             <Button 
                label="Settings" 
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