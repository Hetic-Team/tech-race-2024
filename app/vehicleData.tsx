import IconArrowLeft from '@/assets/Icons/IconArowLeft';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/app/index';
import { Dimensions } from "react-native";

type VehicleDataRouteProp = RouteProp<RootStackParamList, 'VehicleData'>;

export default function VehicleData() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const route = useRoute<VehicleDataRouteProp>();

    const { vehicleIP } = route.params;

    const handleBack = () => {
        navigation.navigate('MoreInfo', { vehicleIP });
    }

    return (
        <View style={styles.container}>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={handleBack}>
                    <IconArrowLeft />
                </TouchableOpacity>
                <Text style={styles.pageNameText}>Vehicule Data</Text>
            </View>
            <View style={styles.vehiculeInformations}>
                <Text style={styles.vehiculeText}>Vehicule ID : { vehicleIP } </Text>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.imagePosition}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.vehiculeImage}
                            resizeMode="cover"
                            source={require('../assets/images/vehiculeImage.png')}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.statusTitle}>Status</Text>
                    <View style={styles.rowStatus}>
                        <View style={styles.colStatus}>
                            <Text style={styles.statusType}>Batterie</Text>
                            <Text style={styles.statusText}>54%</Text>
                        </View>
                        <View style={styles.colStatus}>
                            <Text style={styles.statusType}>Range</Text>
                            <Text style={styles.statusText}>27.4m</Text>
                        </View>
                        <View style={styles.colStatus}>
                            <Text style={styles.statusType}>Speed</Text>
                            <Text style={styles.statusText}>5 km/h</Text>
                        </View>
                    </View>
                </View>
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
        overflow: 'hidden',
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
    vehiculeText: {
        color: Colors.dark.text,
        fontSize: 24,
        marginTop: 20,
    },
    pageNameText:{
        color: Colors.dark.text,
        fontSize: 20,
    },
    bodyContainer: {
        flexDirection: 'column',
        gap: 50,
    },
    imagePosition: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vehiculeImage: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    rowStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    colStatus: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
    },
    statusTitle: {
        color: Colors.dark.text,
        fontSize: 24,
        marginBottom: 30,
    },
    statusType: {
        color: '#7F8489',
        fontSize: 20,
    },
    statusText: {
        color: Colors.dark.text,
        fontSize: 20,
    },
});