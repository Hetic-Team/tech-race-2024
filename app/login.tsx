import Button from '@/components/Button';
import { Input } from '@/components/Input';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/index';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function LoginScreen() {
    
    const [errorIP, setErrorIP] = useState<string>('');
    const [vehicleIP, setVehicleIP] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<Boolean>(false)

    const realVehiculeIP = '1234';

    // Hook de navigation pour naviguer entre les écrans
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    const handleSubmit = () => {
        setErrorIP(''); 


        if (vehicleIP === '') {
            setErrorIP('Vehicle IP is required');
            setErrorMessage(true)
        } 
       
        else if (vehicleIP !== realVehiculeIP) {
            setErrorIP('This vehicle IP does not exist');
            setErrorMessage(true);
        }

        if (vehicleIP === realVehiculeIP) {
            navigation.navigate('HomePage', { vehicleIP });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleLogin}>Tech Race Login</Text>
            <Text style={styles.subtitleLogin}>Enter your vehicle infos.</Text>

            <Input 
                label="Vehicle IP Address" 
                placeholder="Enter Vehicle IP Address" 
                secureTextEntry={false} 
                errorMessage={errorIP}
                value={vehicleIP}
                onChange={setVehicleIP}  // Notez le changement à onChangeText
            />
            {errorMessage ? <Text style={styles.errorText}>{errorIP}</Text> : null}
            <Button 
                label="CONNECT" 
                onClick={handleSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.dark.mainBackground,
        paddingHorizontal: 40,
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
    errorText: {
        top : -20,
        color: 'red',
    },
});
