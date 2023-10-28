"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serialport_1 = require("serialport");
const serialport_2 = require("serialport");
const openSerialPorts = [];
// List available serial ports
serialport_1.SerialPort.list()
    .then((ports) => {
    ports.forEach((port) => {
        console.log(`Port: ${port.path}, Manufacturer: ${port.manufacturer}`);
        // Check if the port is open
        if (port.path) {
            console.log(`${port.path} is open.`);
            // Add the open port to the array
            openSerialPorts.push(port);
        }
        else {
            console.log(`${port.path} is not open.`);
        }
    });
    // Now you have an array of open serial ports
    console.log("Open serial ports:", openSerialPorts);
    // const port = new SerialPort(
    //   {
    //     path: openSerialPorts[0].path,
    //     baudRate: 9600,
    //   },
    //   (err) => {
    //     if (err) {
    //       console.error("Error opening serial port:", err);
    //     } else {
    //       console.log("Serial port opened:", openSerialPorts);
    //       // Now you can work with the `port` object
    //       // For example, you can use port.write() to send data and listen to port.on('data') to receive data.
    //     }
    //   }
    // );
})
    .catch((err) => {
    console.error("Error listing serial ports:", err);
});
const port = new serialport_1.SerialPort({
    path: "COM3",
    baudRate: 9600,
});
const parser = port.pipe(new serialport_2.ReadlineParser({ delimiter: "\r\n" }));
parser.on("data", onData);
function onData(data) {
    console.log("on Data at COM3 : " + data);
}
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("HelloWorld");
});
app.listen(5300, () => {
    console.log("Running on Port 5300");
});
// import { SerialPort } from "serialport";
// import { ReadlineParser } from "serialport";
// const openSerialPorts = [];
// // List available serial ports
// SerialPort.list()
//   .then((ports) => {
//     ports.forEach((port) => {
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
//   .catch((err) => {
//     console.error("Error listing serial ports:", err);
//   });
// const port = new SerialPort({
//   path: "COM3",
//   baudRate: 9600,
// });
// const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));
// parser.on("data", onData);
// function onData(data) {
//   console.log("on Data at COM3 : " + data);
// }
// // parser.write("1234", onSend);
// // function onSend(send) {
// //     console.log("on Sent data at COM3 : " + send);
// // }
