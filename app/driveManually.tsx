import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Joystick } from '@/components/Joystick';

const formatHtml = () => {
    const googleUrl = 'http://192.168.155.10:7000/';
    return (
        `<html>
            <body>
            
                <iframe src="${googleUrl}" width="700px" height="700px" style="position:relative; top: 500; left: 0; right: 0; bottom: 0;"/>
            </body>
        </html>`
    );
}

export default function DriveManually() {

    return (
        <View style={styles.container}>
            <WebView
               style={[
                
                styles.cameraPlaceholder,
                {
                    transform: [{ skewX: '-45deg' }, { skewY: '45deg' }],
                    webView: {
                        width: '100%',
                        height: '100%',
                    },
                },
                
            ]}
                originWhitelist={['*']}
                source={{ html: formatHtml() }}
            />
            <Joystick/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    webView: {
        width: '100%',
        height: '100%',
    },
    cameraPlaceholder: {
        
       
    },
});
