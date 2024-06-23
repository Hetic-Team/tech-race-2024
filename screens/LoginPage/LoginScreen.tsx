import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text } from "react-native";
import Main from '@/components/Main';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Importez le type NativeStackNavigationProp
import { Colors } from '@/constants/Colors';


export type RootFromProfile = {
  Profile: undefined;
};

export type LoginScreenProp = NativeStackNavigationProp<RootFromProfile>;

export default function Login() {
  const data = {
    user: "",
    password: ""
  };

  const [inputText, setInputText] = useState<{ [key: string]: string }>({});
  const [errorAuthe, setErrorAuthe] = useState("");
  const navigation = useNavigation<LoginScreenProp>();

  const handleChange = (name: string, value: string) => {
    setInputText((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const username = inputText.Username;
    const password1 = inputText.Password;

    if (username !== data.user || password1 !== data.password) {
      setErrorAuthe("Username or password incorrect");
    } else {
      setErrorAuthe(""); // Réinitialisez le message d'erreur
      console.log("Username:", username);
      console.log("Password:", password1);
    }
  };

  const handleConnect = () => {
    navigation.navigate('Profile');
  };

  return (
    <Main styles={style.disposition}>
      <View style={style.composantPage}>
        <View style={style.textTitle}>
          <Text style={{ fontSize: hp(5.3), color: "#FFFFFF"}}>Tech Race - Login</Text>
          <Text style={{ color: "#FFFFFF" }}>Enter your vehicle info.</Text>
        </View>

        <View style={style.inputDisposition}>
          <View style={style.inputContainer}>
            <Text style={style.label}>Vehicle ID</Text>
            <TextInput
                keyboardType="default"
                onChangeText={(text) => handleChange('Username', text)}
                style={[style.inputProp, { color: 'white' }]}
                value={inputText.Username}
            />
           </View>
           <View style={style.inputContainer}>
                <Text style={style.label}>Vehicle Password</Text>
                <TextInput
                    keyboardType="default"
                    secureTextEntry={true}
                    onChangeText={(text) => handleChange('Password', text)}
                    style={[style.inputProp, { color: 'white' }]}
                    placeholderTextColor="white"
                    value={inputText.Password}
                />
            </View>
          {errorAuthe !== "" && <Text style={{ color: "red", fontSize: hp(2.2) }}>{errorAuthe}</Text>}

          <Text style={style.buttonConnect} onPress={handleSubmit}>Connect</Text>
        </View>
      </View>
    </Main>
  );
}

const style = StyleSheet.create({
  composantPage: {
    width: wp(95),
    alignItems: 'center',
    borderRadius: 25,
    gap: wp(15)
  },
  textTitle: {
    alignItems : "center",
    gap: wp(10)
  },
  disposition: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.background
  },
  inputDisposition : {
    alignItems: "center",
    gap : hp(2)
  },
  inputProp: {
    width: wp(78),
    height: hp(8),
    backgroundColor: Colors.light.input,
    borderRadius: 10,
    borderColor: Colors.light.inputStr,
    borderWidth: 1,
    fontSize: hp(2.5),
    margin: hp(0.5),
    padding: 10,
  },
  label: {
    fontSize: hp(2),
    color: Colors.light.primary,
    
  },
  inputContainer: {
   
  },
  buttonConnect: {
    fontSize: hp(3),
    backgroundColor: Colors.light.primary,
    textAlign: "center",
    textAlignVertical: "center",
    height: hp(8),
    width: wp(78),
    borderRadius: 10,
    margin: hp(3),
    color: "white"
  }
});
