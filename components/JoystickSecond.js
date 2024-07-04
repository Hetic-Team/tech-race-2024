import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RNGamePad from 'react-native-game-pad';
//import { moveRobot } from "../utils/ROS/ROSFunctions";

function JoystickSecond() {
  // state

  return (
    <View>
      <RNGamePad
  buttonAColor='red'
  // onButtonBPress={this.handleButtonBPress}
  buttonBColor='green'
  dualJoystick={true}
  options={{
    size: 400,
    color: "blue",
    lockX: true
  }}
  options2={{
    size: 400,
    color: "red",
    lockY: true
  }}
/>
    </View>
  );
}

export default JoystickSecond;