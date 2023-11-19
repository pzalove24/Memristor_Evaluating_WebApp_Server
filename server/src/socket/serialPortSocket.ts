import { ReadlineParser, SerialPort } from "serialport";

export const serialPortCommand = (socket: any) => {
  //initialize serial connection with a single byte parser
  var serialConnection = new SerialPort({
    path: "COM3",
    baudRate: 9600,
    autoOpen: false,
  });

  const parser = serialConnection.pipe(
    new ReadlineParser({ delimiter: "\r\n" })
  );

  const readSerialPort = () => {
    parser.on("data", function (data) {
      console.log(data);
      // io.emit("data", data);
    });
  };
  const closeSerialPort = () => {
    console.log("close");
  };
  const errorSerialPort = () => {
    console.log("error");
  };

  serialConnection.on("serialPort:read", readSerialPort);
  serialConnection.on("serialPort:close", closeSerialPort);
  serialConnection.on("serialPort:error", errorSerialPort);
};
