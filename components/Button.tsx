import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import  { Colors } from '@/constants/Colors'

type ButtonProps = {
    label: string,
    onClick: () => void,
};

export function Button(props: ButtonProps){
  
return (
    <View>
        <TouchableOpacity style={styles.button} onPress={props.onClick}>
            <Text style={styles.buttonText}>{props.label}</Text>
        </TouchableOpacity>
    </View>
);
};

const styles = StyleSheet.create({
button: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.primaryGreen, 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
},
buttonText: {
    color: '#ffffff',
    fontSize: 20,
},
});
  
export default Button;