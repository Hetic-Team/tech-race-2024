import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/index';


export default function AutoDrive() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleStart = () => {
      console.log("Button Start")
      navigation.navigate('Login');
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Auto Drive Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light.text,
    },
    buttonStart: {
        fontSize: hp(3),
        backgroundColor: Colors.light.background,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: hp(7),
        width: wp(80),
        borderRadius: 8,
        margin: hp(3),
        color: 'white',
        
    },
});