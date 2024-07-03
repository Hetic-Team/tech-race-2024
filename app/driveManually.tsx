import { Colors } from '@/constants/Colors';
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/index';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';


export default function DriveManually() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleStart = () => {
      console.log("Button Start")
      navigation.navigate('Login');
    };
    
    return (
        //<SafeAreaView style={styles.container}>
          //<ScrollView style={styles.scrollContentContainer}>
            <View style={[
            styles.box,
            {
                transform: [{skewX: '-45deg'}, {skewY: '45deg'}],
            },
           ]}>
                <Text style={styles.text}>Welcome to the Drive Manually Screen!</Text>
            </View>
          //</ScrollView>
        //</SafeAreaView>
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
    scrollContentContainer: {
        alignItems: 'center',
        paddingBottom: 60,
    },
    box: {
        height: 100,
        width: 100,
        borderRadius: 5,
        marginVertical: 40,
        backgroundColor: '#61dafb',
        alignItems: 'center',
        justifyContent: 'center',
      },
});