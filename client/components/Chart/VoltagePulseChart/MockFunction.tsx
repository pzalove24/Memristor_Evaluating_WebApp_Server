// const data = {
//   voltageArray,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => faker.number.float({ min: -1000, max: 1000 })),
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     }
//   ],
// };


//const labels = ["January", "February", "March", "April", "May", "June", "July"];

//----------------------------


// interface PulseSegment {
//   value: number;
//   start: number;
//   end: number;
// }

// function generateMultiPulseVoltageArray(length: number, pulseSegments: PulseSegment[]): number[] {
//   const voltageArray: number[] = Array.from({ length }, (_, index) => {
//     let voltage = 0;
//     pulseSegments.forEach((segment) => {
//       const { value, start, end } = segment;
//       if (index >= start && index <= end) {
//         voltage = value;
//       }
//     });
//     return voltage;
//   });

//   return voltageArray;
// }

// const pulseLength: number = 100;
// const positivePulseValue: number = 5;
// const negativePulseValue: number = -5;
// const pulseDuration: number = 20; // Duration of each pulse

// // Generate the positive and negative pulse segments
// const positivePulseSegment: PulseSegment = {
//   value: positivePulseValue,
//   start: 0,
//   end: pulseDuration - 1,
// };

// const negativePulseSegment: PulseSegment = {
//   value: negativePulseValue,
//   start: pulseDuration,
//   end: 2 * pulseDuration - 1,
// };

// // Create an array with the positive and negative pulse segments
// const pulseSegments: PulseSegment[] = [positivePulseSegment, negativePulseSegment];

// // Generate the multi-pulse voltage array with the alternating pulses
// const voltageArray: number[] = generateMultiPulseVoltageArray(pulseLength, pulseSegments);

// voltageArray.map((voltage, index) => {
//   console.log(`Index: ${index}, Voltage: ${voltage}`);
// });

//=--------------------------------------------------------------------
// const number1 = 42;
// const number2 = 50;

// const result = [...Array(5)].map(() => number1).concat([...Array(6)].map(() => number2));

// console.log(result);
 //------
// function generateNumbers(callCount, order) {
//   const number1 = 42;
//   const number2 = 50;
  
//   const result = [];
  
//   for (let i = 0; i < callCount; i++) {
//     if (order === "number1") {
//       result.push(number1);
//     } else if (order === "number2") {
//       result.push(number2);
//     }
//   }
  
//   return result;
// }

// const callCount = 8;
// const order = "number1";

// const result = generateNumbers(callCount, order);
// console.log(result);
//-----
// const timeValues = Array.from({ length: 100 }, (_, index) => index); // Time values from 0 to 99
// const voltageValues = timeValues.map(time => (time >= 30 && time <= 70) ? 5 : 0); // Pulse voltage values
// console.log(voltageValues)
//--------------
// function generatePulseVoltageArray(length, pulseValue, pulseStart, pulseEnd) {
//   const voltageArray = Array.from({ length }, (_, index) => {
//     if (index >= pulseStart && index <= pulseEnd) {
//       return pulseValue;
//     }
//     return 0;
//   });

//   return voltageArray;
// }

// const pulseLength = 100;
// const arbitraryPulseValue = 6; // Arbitrary pulse voltage value
// const arbitraryPulseStart = 10; // Start index of the pulse
// const arbitraryPulseEnd = 70; // End index of the pulse

// const voltageArray = generatePulseVoltageArray(
//   pulseLength,
//   arbitraryPulseValue,
//   arbitraryPulseStart,
//   arbitraryPulseEnd
// );

// console.log(voltageArray);

//--------------------------------------------------------------
interface PulseSegment {
    value: number;
    start: number;
    end: number;
  }
  
  function generateMultiPulseVoltageArray(length: number, pulseSegments: PulseSegment[]): number[] {
    const voltageArray: number[] = Array.from({ length }, (_, index) => {
      let voltage = 0;
      pulseSegments.forEach((segment) => {
        const { value, start, end } = segment;
        if (index >= start && index <= end) {
          voltage = value;
        }
      });
      return voltage;
    });
  
    return voltageArray;
  }
  
  const pulseLength: number = 1000;
  const pulseSegments: PulseSegment[] = [
    { value: 1, start: 0, end: 39 }, 
    { value: 3, start: 40, end: 69 }, 
    { value: -3, start: 70, end: 100 }, 
  ];
  
  const voltageArray: number[] = generateMultiPulseVoltageArray(pulseLength, pulseSegments);
  
  
  const timeValues = Array.from({ length: 1000 }, (_, index) => index); // Time values from 0 to 99