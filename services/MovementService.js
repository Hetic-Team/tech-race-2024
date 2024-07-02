// CarCommands.js
import { BASE_URL } from '../constants/Urls';
import WebSocketHelper from './WebsocketHelper';

const carApi = BASE_URL;
const wsHelper = new WebSocketHelper(carApi);

export const moveForwards = () => {
  const command = {
    cmd: 1,
    data: [2000, 2000, 2000, 2000],
  };
  wsHelper.sendCommand(command);
};

export const moveBackwards = () => {
  const command = {
    cmd: 1,
    data: [-2000, -2000, -2000, -2000],
  };
  wsHelper.sendCommand(command);
};

export const turnLeft = () => {
  const command = {
    cmd: 1,
    data: [-2000, 2000, -2000, 2000],
  };
  wsHelper.sendCommand(command);
};

export const turnRight = () => {
  const command = {
    cmd: 1,
    data: [2000, -2000, 2000, -2000],
  };
  wsHelper.sendCommand(command);
};
