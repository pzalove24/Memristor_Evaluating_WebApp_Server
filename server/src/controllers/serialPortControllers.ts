export const getSerialPort = async (req: any, res: any) => {
  try {
    res.status(200).json({ data: "This is hardware from express typescript" });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getCOMport = async (req: any, res: any) => {
  try {
    


  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
