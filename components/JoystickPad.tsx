import { Joystick } from 'react-joystick-component';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getForwardsPayload, getBackwardsPayload, getLeftPayload, getRightPayload, getStopPayload} from '@/services/MovementService'; 
import { BASE_URL } from '@/constants/Urls';

export const JoystickPad = () => {
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

  const handleButtonPress = (e: any) => {
    if(e.type == "stop") sendDirectionToAPI(0);
    else if (e.direction == "FORWARD") sendDirectionToAPI(1);
    else if (e.direction == "RIGHT") sendDirectionToAPI(4);
    else if (e.direction == "LEFT") sendDirectionToAPI(3);
    else if (e.direction == "BACKWARD") sendDirectionToAPI(2);
    else sendDirectionToAPI(0);

    };
    // sendDirectionToAPI(type);


  return (
    <Joystick size={100} throttle={50} sticky={true} baseColor="red" stickColor="blue" start={handleButtonPress} move={handleButtonPress} stop={handleButtonPress}></Joystick>
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