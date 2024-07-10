import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface InputProps {
    label: string;
    placeholder: string;
    secureTextEntry: boolean;
    errorMessage?: string;
    value: string;
    onChange: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    secureTextEntry,
    errorMessage,
    value,
    onChange,
}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChange}
            />
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 5,
        color: Colors.dark.text,
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.dark.border,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
    },
    error: {
        color: 'red',
        marginTop: 5,
    },
});

export default Input;
