import { Colors } from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/index';
import { IconAutoPilot } from '@/assets/Icons/IconAutoPilot'
import IconArrowLeft from '@/assets/Icons/IconArowLeft';
import { IconNotifications } from '@/assets/Icons/IconNotifications';
import { IconLogout } from '@/assets/Icons/IconLogout';
import { SwitchButton } from '@/components/SwitchButton';
import { useRoute, RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SettingsRouteProp = RouteProp<RootStackParamList, 'Setting'>;

export default function Setting() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const route = useRoute<SettingsRouteProp>();

    const { vehicleIP } = route.params;

    const handleBack = () => {
        navigation.navigate('HomePage', { vehicleIP });
    }

    const handleLogout = () => {
        navigation.navigate('Login');
    }

    const [isAutoPilot, setIsAutoPilot] = useState(false);
    const [isNotificationOn, setIsNotificationOn] = useState(false);

    useEffect(() => {
        const getSwitchState = async () => {
          try {

            const savedNotificationState = await AsyncStorage.getItem('notificationSwitchState');
            if (savedNotificationState !== null) {
                setIsNotificationOn(JSON.parse(savedNotificationState));
            }
    
            const savedAutopilotState = await AsyncStorage.getItem('autopilotSwitchState');
            if (savedAutopilotState !== null) {
                setIsAutoPilot(JSON.parse(savedAutopilotState));
            }

          } catch (error) {
            console.log(error);
          }
        };
    
        getSwitchState();
      }, []);
    
      const toggleNotifications = async () => {
        setIsNotificationOn(isNotificationOn => !isNotificationOn);
        try {
          await AsyncStorage.setItem('notificationSwitchState', JSON.stringify(!isNotificationOn));
        } catch (error) {
          console.log(error);
        }
      };

      const toggleAutoPilot = async () => {
        setIsAutoPilot(isAutoPilot => !isAutoPilot);
        try {
          await AsyncStorage.setItem('autopilotSwitchState', JSON.stringify(!isAutoPilot));
        } catch (error) {
          console.log(error);
        }
      };
    
    return (
        <View style={styles.container}>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={handleBack}>
                    <IconArrowLeft />
                </TouchableOpacity>
                <Text style={styles.settingsText}>Settings</Text>
            </View>
            <View style={styles.vehiculeInformations}>
                <TouchableOpacity onPress={() => {}}>
                </TouchableOpacity>
                <Text style={styles.vehiculeText}>Vehicule ID : {vehicleIP} </Text>
            </View>
            <View style={styles.settingsContainer}>
                <View style={styles.rowContainer}>
                    <IconAutoPilot color="white" size={25}/>
                    <Text style={styles.settingsText}>Automatic drive</Text>
                    <SwitchButton isActive={isAutoPilot} onClick={toggleAutoPilot}/>
                </View>
                <View style={styles.rowContainer}>
                    <IconNotifications color='white' size={25}/>
                    <Text style={styles.settingsText}>Notifications</Text>
                    <SwitchButton isActive={isNotificationOn} onClick={toggleNotifications}/>
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>LOGOUT</Text>
                    <IconLogout color="red" size={20}/>
                </TouchableOpacity>
            </View>
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
        height: 50,
    },
    vehiculeInformations: {
        top: 60,
        left: 40,
        position: 'absolute',
    },
    navigationContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        top: 20,
        left: 20,
        position: 'absolute',
        gap: 20,
    },
    logoutButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        borderColor: 'red',
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    logoutButtonText:{
        color: 'red',
        fontSize: 20,
    },
    logoutButtonIcon:{
        color: 'red',
    },
    settingsContainer: {
        flexDirection: 'column',
        gap: 60,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    vehiculeText: {
        color: Colors.dark.text,
        fontSize: 24,
        marginTop: 20,
    },
    settingsText:{
        color: Colors.dark.text,
        fontSize: 20,
    }
});