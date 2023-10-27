// function generateStaircaseWaveform(
//     stepsPerSegment: number,
//     stepSize: number,
//     positiveRange: number,
//     negativeRange: number
//   ): number[] {
//     const positiveSegment: number[] = [];
//     const negativeSegment: number[] = [];

//     for (let i = 0; i <= stepsPerSegment; i++) {
//       const positiveValue = (i * (positiveRange / stepsPerSegment)) ;
//       const negativeValue = (i * ((negativeRange) / stepsPerSegment)) ;
//       positiveSegment.push(Number(positiveValue.toFixed(2))); // Round to two decimal places
//       negativeSegment.push(Number(negativeValue.toFixed(2))); // Round to two decimal places
//     }

//       const waveform = [...positiveSegment,...positiveSegment.reverse(), ...negativeSegment, ...negativeSegment.reverse()];

//     return waveform;
//   }

//   const stepsPerSegment = 10; // Number of steps per waveform segment
//   const stepSize = 1; // Size of each step (adjust as needed)
//   const positiveRange = 5; // Positive voltage range
//   const negativeRange = -5; // Negative voltage range

//   const staircaseWaveform: number[] = generateStaircaseWaveform(
//     stepsPerSegment,
//     stepSize,
//     positiveRange,
//     negativeRange
//   );

//   console.log(staircaseWaveform);


// const data = [
//     { thing: 3, build: 2 },
//     { thing: 4, build: 2 },
//     { thing: 3, build: 2 },
//     { thing: 4, build: 2 },
//     { thing: 3, build: 2 },
//     { thing: 4, build: 2 }
//   ];
  
//   const append1 = [9, 10, 11];
//   const append2 = [4, 5, 6];
  
//   const newData = data.map((item, index) => {
//     if (index < append1.length) {
//       return { ...item, thing: append1[index] };
//     } else {
//       return { ...item, thing: append2[index - append1.length] };
//     }
//   });
  
//   console.log(newData);
  