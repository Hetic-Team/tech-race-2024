import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/(tabs)/index';
import Main from '@/components/Main';
import stylesHomePage from './HomePageStyle';


export default function HomePage() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleConnect = () => {
    console.log("Button Start")
    navigation.navigate('Login');
  };
  return (
    <Main styles={stylesHomePage.disposition}>
      <View>
        <Image
          source={require('@/assets/images/car.webp')} // Utilisation de l'image locale
          style={stylesHomePage.image}
        />
      </View>
      <View>
        <Text style={stylesHomePage.text}>Tech Race n'8</Text>
      </View>
      <View>
        <Text style={stylesHomePage.buttonLogin} onPress={handleConnect}>Start</Text>
      </View>
    </Main>
  );
}
