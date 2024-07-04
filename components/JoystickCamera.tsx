import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getForwardsPayload, getBackwardsPayload, getLeftPayload, getRightPayload, getStopPayload} from '@/services/MovementService'; 
import { BASE_URL } from '@/constants/Urls';
import { SafeAreaView } from 'react-native-safe-area-context';

export const JoystickCamera = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = new WebSocket(`ws://${BASE_URL}/ws`);
    console.log("Bae URL", BASE_URL)
    socket.onopen = () => {
      console.log('WebSocket connection opened');
      setWs(socket);
    };

    socket.onmessage = (event) => {
      console.log('Received:', event.data);
      setMessages(prevMessages => [...prevMessages, event.data]);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);

  // const [input, setInput] = useState('');
  
  // const sendMessage = () => {
  //   if (ws && input) {
  //     ws.send(input);
  //     setMessages(prevMessages => [...prevMessages, `You: ${input}`]);
  //     setInput('');
  //   }
  // };

  const sendPayload = (payload: { cmd: number; data: number[]; }) => {
    
    if (ws) {
      ws.send(JSON.stringify(payload));
      setMessages(prevMessages => [...prevMessages, `You: ${JSON.stringify(payload)}`]);
    }
  };

  const sendDirectionToAPI = async (type: Number) => {
    try {
      console.log('Sending direction to API:', type);
      if(type == 0) sendPayload(getStopPayload());
      else if (type == 1) {
        sendPayload(getForwardsPayload());
      }
      else if (type == 2) sendPayload(getBackwardsPayload());
      else if (type == 3) sendPayload(getLeftPayload());
      else if (type == 4) sendPayload(getRightPayload());
    } catch (error) {
      console.log('Error sending direction to API:', error);
    }
  };

  const handleButtonPress = (type: Number) => {
    sendDirectionToAPI(type);
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
    
      <View style={styles.arrowsContainer}>
        <TouchableOpacity
          style={styles.arrowButton}
          onLongPress={() => handleButtonPress(1)}
          onPressOut={() => handleButtonPress(0)}
        >
          <Text style={styles.arrowText}>↑</Text>
        </TouchableOpacity>
        <View style={styles.horizontalArrows}>
          <TouchableOpacity
            style={styles.arrowButton}
            onLongPress={() => handleButtonPress(3)}
              onPressOut={() => handleButtonPress(0)}
            // onPressOut={() => handleButtonPress(0)}
          >
            <Text style={styles.arrowText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.arrowButton}
            onLongPress={() => handleButtonPress(4)}
            onPressOut={() => handleButtonPress(0)}
          >
            <Text style={styles.arrowText}>→</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onLongPress={() => handleButtonPress(2)}
          onPressOut={() => handleButtonPress(0)}
        >
          <Text style={styles.arrowText}>↓</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => handleButtonPress(0)}
        >
          <Text style={styles.arrowText}>STOP</Text>
        </TouchableOpacity> */}
      </View>
      </View>
      </SafeAreaView>
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
    margin: 5,
    padding: 5,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  arrowText: {
    fontSize: 10,
  },
});

// export default Joystick;
