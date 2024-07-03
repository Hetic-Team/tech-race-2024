// CarCommands.js

export const getStopPayload = () => {
  const command = {
    cmd: 1,
    data: [0,0,0,0],
  };
  return command;
};
export const getForwardsPayload = () => {
  const command = {
    cmd: 1,
    data: [500, 500, 500, 500],
  };
  return command;
};

export const getBackwardsPayload = () => {
  const command = {
    cmd: 1,
    data: [-500, -500, -500, -500],
  };
  return command;
};

export const getLeftPayload = () => {
  const command = {
    cmd: 1,
    data: [200, 500, 200, 500],
  };
  return command;
};

export const getRightPayload = () => {
  const command = {
    cmd: 1,
    data: [500, 200, 500, 200],
  };
  return command;

};
