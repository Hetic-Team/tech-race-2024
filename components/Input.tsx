import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import  { Colors } from '@/constants/Colors'

type InputProps = {
    label: string,
    value: string,
    placeholder: string,
    secureTextEntry?: boolean,
    isErrored?: boolean,
    errorMessage?: string,
    onChange: (text: string) => void,
};

export const Input = (props: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{props.label}</Text>
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused,props.isErrored && styles.inputErrored]}
            placeholder={props.placeholder}
            placeholderTextColor={Colors.dark.placeholder}
            secureTextEntry={props.secureTextEntry}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={props.value}
            onChangeText={props.onChange}
        />
         {props.secureTextEntry && props.isErrored && <Text style={styles.errorMessage}>{props.errorMessage}</Text>}
         {!props.secureTextEntry && props.isErrored && <Text style={styles.errorMessage}>{props.errorMessage}</Text>}
      </View>
    );
  };

const styles = StyleSheet.create({

    inputContainer: {
        marginBottom: 40,
    },
    inputLabel: {
        color: Colors.light.primaryGreen,
        fontSize: 16,
        marginBottom: 2,
    },
    input: {
        height: 50,
        borderColor: Colors.light.inputBorder,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        color: Colors.dark.text,
        backgroundColor: Colors.light.inputBackground,
    },
    inputFocused: {
        borderColor: Colors.light.primaryGreen,
    },
    errorMessage: {
        bottom: 0,
        color: Colors.light.errorColor,
        marginTop: 2,
    },
    inputErrored: {
        borderColor: Colors.light.errorColor,
    },
});
