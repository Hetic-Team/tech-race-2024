import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/index';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DriveManually() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [cameraReady, setCameraReady] = useState(false);

    const handleStart = () => {
        console.log("Button Start");
        navigation.navigate('Login');
    };

    const handleControl = (direction: string) => {
        console.log(`Moving: ${direction}`);
        // Ajouter ici la logique pour piloter le véhicule en fonction de la direction
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={[
                styles.cameraPlaceholder,
                {
                    transform: [{ skewX: '-45deg' }, { skewY: '45deg' }],
                },
            ]}
            
            >
                {cameraReady ? (
                    <Text style={styles.text}>Camera is Ready</Text>
                ) : (
                    <Text style={styles.text}>Camera Placeholder</Text>
                )}
            
            <View style={styles.controlContainer}>
                <View style={styles.joystickContainer}>
                    <TouchableOpacity onPress={() => handleControl('left')} style={styles.joystickButton}>
                        <Text style={styles.joystickText}>⬅️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleControl('up')} style={styles.joystickButton}>
                        <Text style={styles.joystickText}>⬆️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleControl('right')} style={styles.joystickButton}>
                        <Text style={styles.joystickText}>➡️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleControl('down')} style={styles.joystickButton}>
                        <Text style={styles.joystickText}>⬇️</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.background,
    },
    cameraPlaceholder: {
        width: wp('180%'),
        height: hp('60%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light.text,
    },
    controlContainer: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
    },
    joystickContainer: {
        top: hp(20),
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
    joystickButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.background,
        borderRadius: 25,
        margin: 10,
    },
    joystickText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.light.text,
    },
});
