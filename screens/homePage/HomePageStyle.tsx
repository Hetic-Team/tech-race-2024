import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const stylesHomePage = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', // Ajoutez cette ligne pour aligner l'image et le texte sur une ligne
    },
    image: {
        width: wp(70),
        height: wp(70),
        borderRadius: wp(100), // La moitié de la largeur/hauteur pour rendre l'image circulaire
        marginRight: wp(2), // Espace entre l'image et le texte
    },
    text: {
        fontSize: hp(5),
        color: '#FFFFFF',
    },
    disposition: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: wp(30),
        backgroundColor: Colors.light.primary,
    },
    buttonLogin: {
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
});

export default stylesHomePage;