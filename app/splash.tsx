import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
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
      },
      centeredContent: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        // width: 100,
        // height: 100,
        marginBottom: 20,
      },
      text: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        paddingHorizontal: 20,
      },
});