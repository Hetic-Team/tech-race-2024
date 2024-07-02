import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moveForwards, moveBackwards, turnLeft , turnRight} from '@/services/MovementService'; 

export const Joystick = () => {
  const [message, setMessage] = useState('');

  const sendDirectionToAPI = async (type: Number) => {
    try {
      console.log('Sending direction to API:', type);
      if (type == 1) moveForwards();
      else if (type == 2) moveBackwards();
      else if (type == 3) turnRight();
      else if (type == 4) turnLeft();
    } catch (error) {
      console.log('Error sending direction to API:', error);
    }
  };

  const handleButtonPress = (type: Number) => {
    sendDirectionToAPI(type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.arrowsContainer}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => handleButtonPress(1)}
        >
          <Text style={styles.arrowText}>↑</Text>
        </TouchableOpacity>
        <View style={styles.horizontalArrows}>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => handleButtonPress(2)}
          >
            <Text style={styles.arrowText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => handleButtonPress(3)}
          >
            <Text style={styles.arrowText}>→</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => handleButtonPress(4)}
        >
          <Text style={styles.arrowText}>↓</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  arrowsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalArrows: {
    flexDirection: 'row',
  },
  arrowButton: {
    margin: 10,
    padding: 20,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  arrowText: {
    fontSize: 24,
  },
});

// export default Joystick;
