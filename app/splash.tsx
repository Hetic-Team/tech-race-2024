import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/index';

export default function SplashScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleStart = () => {
        console.log("Button Start")
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.centeredContent}>
                <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.text}>Tech no. 8</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    label="Start" 
                    onClick={handleStart}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background, // couleur background
    },
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('10%'),
    },
    logo: {
        width: wp('50%'), // 50% width
        height: hp('25%'), // 25% height
        marginBottom: hp('5%'), // margin bottom
        resizeMode: 'contain', // meme aspect ratio
    },
    text: {
        fontSize: wp('5%'), // font size
        textAlign: 'center',
        color: Colors.textPrimary, // ytext color
        marginBottom: hp('5%'), // bottom margin
    },
    buttonContainer: {
        position: 'absolute',
        bottom: hp('5%'), // bottom
        width: '100%',
        paddingHorizontal: wp('10%'), // padding horizontal
    },
});
