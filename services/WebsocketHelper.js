const WebSocket = require('ws');
// WebSocketHelper.js
export default class WebSocketHelper {
    constructor(carIpAddress) {
      this.ws = new WebSocket(`ws://${carIpAddress}/ws`);
  
      this.ws.onopen = () => {
        console.log('WebSocket Connection Opened');
      };
  
      this.ws.onmessage = (e) => {
        console.log('Message from server', e.data);
      };
  
      this.ws.onerror = (e) => {
        console.log('WebSocket Error', e.message);
      };
  
      this.ws.onclose = (e) => {
        console.log('WebSocket Connection Closed', e.code, e.reason);
      };
    }
  
    sendCommand(command) {
      if (this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify(command));
      } else {
        console.log('WebSocket is not open. Ready state: ' + this.ws.readyState);
      }
    }
  }
  