import Button from '@/components/Button';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '.';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomePageRouteProp = RouteProp<RootStackParamList, 'HomePage'>;

const HomePage: React.FC = () => {
    const route = useRoute<HomePageRouteProp>();
    const { vehicleIP } = route.params;

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleMoreInfo = () => {
        navigation.navigate('MoreInfo');
    };

    const handleDriveManually = () => {
        navigation.navigate('DriveManually');
    };

    const handleDriveAuto = () => {
        navigation.navigate('AutoDrive');
    };

    const handleSetting = () => {
        navigation.navigate('Setting', { vehicleIP });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.vehicleIP}>Vehicle IP: {vehicleIP}</Text>

            <View style={styles.buttonContainer}>
                <Button
                    label="Drive Manually"
                    onClick={handleDriveManually}
                    style={styles.button}
                />
                <View style={styles.buttonSpacer} />
                <Button
                    label="Drive Auto"
                    onClick={handleDriveAuto}
                    style={styles.button}
                />
                <View style={styles.buttonSpacer} />
                <Button
                    label="More Info"
                    onClick={handleMoreInfo}
                    style={styles.button}
                />
                <View style={styles.buttonSpacer} />
                <Button
                    label="Settings"
                    onClick={handleSetting}
                    style={styles.button}
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
        backgroundColor: Colors.dark.mainBackground,
        paddingHorizontal: wp('10%'),
    },
    vehicleIP: {
        color: '#ffffff',
        fontSize: wp('5%'),
        marginBottom: hp('5%'),
    },
    buttonContainer: {
        marginTop: hp('5%'),
        width: '100%',
    },
    button: {
        marginBottom: hp('2%'),
    },
    buttonSpacer: {
        height: hp('8%'),
    },
});

export default HomePage;
