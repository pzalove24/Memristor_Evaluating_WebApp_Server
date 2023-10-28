export const getSerialPort = async (req: any, res: any) => {
  try {
    res.send("HelloWorlds");
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
