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


// // import { SerialPort } from "serialport";
// // import { ReadlineParser } from "serialport";

// const { SerialPort } = require("serialport");
// const { ReadlineParser } = require("serialport");

// const openSerialPorts: any = [];

// // List available serial ports

// SerialPort.list()
//   .then((ports: any) => {
//     ports.forEach((port: any) => {
//       console.log(`Port: ${port.path}, Manufacturer: ${port.manufacturer}`);
//       // Check if the port is open
//       if (port.path) {
//         console.log(`${port.path} is open.`);
//         // Add the open port to the array
//         openSerialPorts.push(port);
//       } else {
//         console.log(`${port.path} is not open.`);
//       }
//     });
//     // Now you have an array of open serial ports
//     console.log("Open serial ports:", openSerialPorts);

//     // const port = new SerialPort(
//     //   {
//     //     path: openSerialPorts[0].path,
//     //     baudRate: 9600,
//     //   },
//     //   (err) => {
//     //     if (err) {
//     //       console.error("Error opening serial port:", err);
//     //     } else {
//     //       console.log("Serial port opened:", openSerialPorts);
//     //       // Now you can work with the `port` object
//     //       // For example, you can use port.write() to send data and listen to port.on('data') to receive data.
//     //     }
//     //   }
//     // );
//   })
//   .catch((err: any) => {
//     console.error("Error listing serial ports:", err);
//   });

// const port = new SerialPort({
//   path: "COM3",
//   baudRate: 9600,
// });

// const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

// parser.on("data", onData);

// function onData(data: any) {
//   console.log("on Data at COM3 : " + data);
// }
