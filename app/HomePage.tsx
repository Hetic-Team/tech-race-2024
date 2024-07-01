import Button from '@/components/Button';
import { Input } from '@/components/Input';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function HomePage() {
   

    const handleSubmit = () => {
       console.log("Button Clicked")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.vehicleId}>Vehicle ID : XXXXXX</Text>
            <Button 
                label="VEHICLE DATA" 
                onClick={handleSubmit}
            />
             <Button 
                label="DRIVE MANUALLY" 
                onClick={handleSubmit}
            />
             <Button 
                label="AUTO DRIVE" 
                onClick={handleSubmit}
            />
             <Button 
                label="SESSION LOGS" 
                onClick={handleSubmit}
            />
             <Button 
                label="SETTINGS" 
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
        gap: wp(15)
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
    vehicleId :{
        color: '#ffffff',
        fontSize: 20,
    }
});