import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";

// Replace with the actual serial port name and baud rate
const portName = "/dev/ROBOT";
const baudRate = 9600;

const port = new SerialPort({ path: portName, baudRate: baudRate });
const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

// Open the serial port
port.on("open", () => {
  console.log("Serial port is open.");
});

// Handle errors
port.on("error", (err) => {
  console.error("Error:", err);
});

// Close the serial port
port.on("close", () => {
  console.log("Serial port is close");
});

const data: any = [];
parser.on("data", (line) => {
  const keyValuePairs = line.split(" ");

  // Initialize an object to store the parsed data
  const parsedData: any = {};

  keyValuePairs.forEach((pair: any) => {
    const [key, value] = pair.split("_");
    parsedData[key] = parseFloat(value); // Convert the value to a number
  });

  // Add the parsed data object to the data array
  data.push(parsedData);
  console.log("Parsed Data:", data);
});

// import React from 'react'

// export const serialPort = () => {
//   return (
//     <div>serialPort</div>
//   )
// }

// interface serialPortCommandProps {

// }

// export const serialPortCommand = () => {
//   const command = ""
// }
