import Button from '@/components/Button';
import { Input } from '@/components/Input';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/index';


export default function LoginScreen() {
    const [isWrongId, setIsWrongId] = useState<boolean>(false);
    const [isWrongPassword, setIsWrongPassword] = useState<boolean>(false);
    const [errorID, setErrorID] = useState<string>('');
    const [errorPassword, setErrorPassword] = useState<string>('');
    const [vehicleID, setVehicleID] = useState<string>('');
    const [vehiclePassword, setVehiclePassword] = useState<string>('');

    const realVehiculeID = 'alexandre';
    const realVehiculePassword = '1234';

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();



    const handleSubmit = () => {
        setIsWrongId(false);
        setIsWrongPassword(false);
        setErrorID('');
        setErrorPassword('');
        navigation.navigate('HomePage');
        if (vehicleID === '') {
            setIsWrongId(true);
            setErrorID('Vehicle ID is required');
        } else if (vehicleID !== realVehiculeID) {
            setIsWrongId(true);
            setErrorID('This vehicle ID does not exist');
        }
    
        if (vehiclePassword === '') {
            setIsWrongPassword(true);
            setErrorPassword('Vehicle password is required');
        } else if (vehiclePassword !== realVehiculePassword) { 
            setIsWrongPassword(true);
            setErrorPassword('Wrong password');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleLogin}>Tech Race Login</Text>
            <Text style={styles.subtitleLogin}>Enter your vehicle infos.</Text>

            <Input 
                label="Vehicle ID" 
                placeholder="Enter Vehicle ID" 
                secureTextEntry={false} 
                isErrored={isWrongId} 
                errorMessage={errorID}
                value={vehicleID}
                onChange={setVehicleID}
            />
            <Input 
                label="Vehicle Password" 
                placeholder="Enter Vehicle Password" 
                secureTextEntry={true} 
                isErrored={isWrongPassword} 
                errorMessage={errorPassword}
                value={vehiclePassword}
                onChange={setVehiclePassword}
            />
            <Button 
                label="CONNECT" 
                onClick={handleSubmit}
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
    }
});