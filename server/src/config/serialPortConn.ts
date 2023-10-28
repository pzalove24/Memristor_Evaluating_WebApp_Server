import { SerialPort } from "serialport";
import { ReadlineParser } from "serialport";

const openSerialPorts : any = [];

// List available serial ports
SerialPort.list()
  .then((ports) => {
    ports.forEach((port) => {
      console.log(`Port: ${port.path}, Manufacturer: ${port.manufacturer}`);
      // Check if the port is open
      if (port.path) {
        console.log(`${port.path} is open.`);
        // Add the open port to the array
        openSerialPorts.push(port);
      } else {
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

const port = new SerialPort({
  path: "COM3",
  baudRate: 9600,
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

parser.on("data", onData);

function onData(data: string) {
  console.log("on Data at COM3 : " + data);
}

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

//