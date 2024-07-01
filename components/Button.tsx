import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import  { Colors } from '@/constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



type ButtonProps = {
    label: string,
    onClick: () => void,
};

export function Button(props: ButtonProps){
  
return (
    <View>
        <Text style={styles.button} onPress={props.onClick}>{props.label}</Text>
    </View>
);
};

const styles = StyleSheet.create({
button: {
    /*flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.primaryGreen, 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,*/
    fontSize: hp(3),
    backgroundColor: Colors.light.primaryGreen,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: hp(7),
    width: '100%',
    borderRadius: 8,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
},
buttonText: {
    color: '#ffffff',
    fontSize: 20,
},
});
  
export default Button;