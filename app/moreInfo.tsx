import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/index';
import Button from '@/components/Button';
import IconArrowLeft from '@/assets/Icons/IconArowLeft';

type MoreInfoRouteProp = RouteProp<RootStackParamList, 'MoreInfo'>;

export default function MoreInfo() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const route = useRoute<MoreInfoRouteProp>();

    const { vehicleIP } = route.params;

    const handleBack = () => {
        console.log('retour en arriere');
        navigation.navigate('HomePage', { vehicleIP });
    }

    const handleVehicleData = () => {
        console.log("Button Vehicle Data")
        navigation.navigate('VehicleData', { vehicleIP });
    }

    const handleSessionLog = () => {
        console.log("Button Session Log")
        navigation.navigate('SessionLog');
    }

    return (
        <View style={styles.container}>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={handleBack}>
                    <IconArrowLeft />
                </TouchableOpacity>
                <Text style={styles.moreInfoText}>More Info</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Button 
                    label="Vehicle Data" 
                    onClick={handleVehicleData}
                />
                <Button 
                    label="Sessions Logs" 
                    onClick={handleSessionLog}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navigationContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        top: 20,
        left: 20,
        position: 'absolute',
        gap: 20,
    },
    moreInfoText:{
        color: Colors.dark.text,
        fontSize: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark.mainBackground,
    },
    bodyContainer: {
        flexDirection: 'column',
        gap: 60,
    },
});