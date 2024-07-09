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
    data: [2000, 2000, 2000, 2000],
  };
  return command;
};

export const getBackwardsPayload = () => {
  const command = {
    cmd: 1,
    data: [-2000, -2000, -2000, -2000],
  };
  return command;
};

export const getLeftPayload = () => {
  const command = {
    cmd: 1,
    data: [200, 200, 2000, 2000],
  };
  return command;
};

export const getRightPayload = () => {
  const command = {
    cmd: 1,
    data: [2000, 2000, 200, 200],
  };
  return command;

};
/**
 * Get the payload for the camera movement command
 * @param {Number} x 
 * @param {Number} y 
 * @returns 
 */
export const mapJoystickToCameraAngles = (x, y) => {
  // Ensure x and y are within the range -1 to 1
  x = Math.max(-1, Math.min(1, x));
  y = Math.max(-1, Math.min(1, y));

  // Calculate the vertical angle based on y-axis
  const verticalAngle = 20 + ((y + 1) * 140 / 2);

  // Calculate the horizontal angle based on x-axis
  const horizontalAngle = 20 + ((x + 1) * 140 / 2);

  return [verticalAngle, horizontalAngle];
}
