import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/index';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { Colors } from '@/constants/Colors';

const LoginScreen: React.FC = () => {
    const [errorIP, setErrorIP] = useState<string>('');
    const [vehicleIP, setVehicleIP] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    const realVehiculeIP = '1234';

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleSubmit = () => {
        setErrorIP('');
        setErrorMessage(false);

        if (vehicleIP === '') {
            setErrorIP('Vehicle IP is required');
            setErrorMessage(true);
        } else if (vehicleIP !== realVehiculeIP) {
            setErrorIP('This vehicle IP does not exist');
            setErrorMessage(true);
        }

        if (vehicleIP === realVehiculeIP) {
            navigation.navigate('HomePage', { vehicleIP });
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                <Text style={styles.titleLogin}>Tech Race Login</Text>
                <Text style={styles.subtitleLogin}>Enter your vehicle infos.</Text>

                <Input
                    label="Vehicle IP Address"
                    placeholder="Enter Vehicle IP Address"
                    secureTextEntry={false}
                    errorMessage={errorIP}
                    value={vehicleIP}
                    onChange={setVehicleIP}
                />
                {errorMessage ? <Text style={styles.errorText}>{errorIP}</Text> : null}
                <Button label="CONNECT" onClick={handleSubmit} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.mainBackground,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: wp('10%'),
    },
    titleLogin: {
        fontSize: wp('10%'),
        color: Colors.dark.text,
        marginBottom: hp('2%'),
    },
    subtitleLogin: {
        fontSize: wp('4%'),
        color: Colors.dark.text,
        marginBottom: hp('5%'),
    },
    errorText: {
        color: 'red',
        marginBottom: hp('2%'),
    },
});

export default LoginScreen;
