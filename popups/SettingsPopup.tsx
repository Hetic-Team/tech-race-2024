import React, { useEffect, useState } from "react";
import {
  Provider,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from "@react-native-material/core";
import {
  SafeAreaView,
  StyleSheet,

} from "react-native";
import {Slider} from '@miblanchard/react-native-slider';
import { BASE_URL } from "@/constants/Urls";

export default function SettingsPopup() {
    
  const [verticalValue, setVerticalValue] = useState<number>(90);
  const [horizontalValue, setHorizontalValue] = useState<number>(90);
    const [visible, setVisible] = useState(false);
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
/**
 * Send payload to the server
 * @param payload 
 */
  const sendPayload = (payload: { cmd: number; data: number[]; }) => {
    
    if (ws) {
      ws.send(JSON.stringify(payload));
      setMessages(prevMessages => [...prevMessages, `You: ${JSON.stringify(payload)}`]);
    }
  };
    /**
     * Function to send camera alignment to the server
     * @param vertical {Number}
     * @param horizontal {Number}
     */
    const onCameraAlignment = (vertical: number, horizontal: number) => { 
        console.log('Sending direction to API:', vertical, horizontal);
        setVerticalValue(Number(vertical));
        setHorizontalValue(Number(horizontal));
        sendPayload({cmd: 1, data: [vertical, horizontal]});
    }
  return (
      <>
          {/* <IconButton
              icon={(props) => <Icon name="information" {...props} />}
                onPress={() => setVisible(true)}
          style={styles.settingsButton}
        /> */}
      <Button
        title="Settings"
        style={styles.settingsButton}
        onPress={() => setVisible(true)}
      />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Settings" />
              <DialogContent>
                  <Text>Camera</Text>
        <Slider
                      value={verticalValue}
                      minimumValue={30}
                        maximumValue={150}
                    onValueChange={value => onCameraAlignment(Number(value), horizontalValue)}
                />
                  <Text>{Math.ceil(horizontalValue)}</Text>
                  <Slider
                      value={horizontalValue}
                      minimumValue={30}
                        maximumValue={150}
                    onValueChange={value =>onCameraAlignment(verticalValue, Number(value))}
                />
                  <Text>{Math.ceil(horizontalValue)}</Text>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
        </DialogActions>
      </Dialog>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  joystick: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  settingsButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
