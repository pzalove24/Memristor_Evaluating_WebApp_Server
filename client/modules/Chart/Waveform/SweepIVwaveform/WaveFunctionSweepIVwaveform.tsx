export type WaveFunctionSweepIVwaveformProps = {
  positivePulseValue: number;
  negativePulseValue: number;
  pulseDuration: number; // Duration of each pulse
  stepsPerSegment: number; // cycle of intermediate pulse
  cycles: number; // Number of times to repeat the waveform
};

export const WaveFunctionSweepIVwaveform = ({
  positivePulseValue,
  negativePulseValue,
  pulseDuration,
  stepsPerSegment,
  cycles,
}: WaveFunctionSweepIVwaveformProps) => {
  interface PulseSegment {
    value: number;
    start: number;
    end: number;
  }

  function generateMultiPulseVoltageArray(
    length: number,
    pulseSegments: PulseSegment[]
  ): number[] {
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
  
  // const positivePulseValue: number = 3;
  // const negativePulseValue: number = -3;
  // const pulseDuration: number = 20; // Duration of each pulse
  // const stepsPerSegment: number = 5; // cycle of intermediate pulse
  // const cycles: number = 1; // Number of times to repeat the waveform
  const pulseLength: number =
    4 * stepsPerSegment * pulseDuration + 2 * pulseDuration;

  // Generate the positive and negative pulse segments

  function generateIntermediatePositivePulseSegmentConsecutive(
    stepsPerSegment: number,
    positivePulseValue: number,
    negativePulseValue: number
  ) {
    const singlePulseSegment = [];
    const positiveSegment: number[] = [];
    const negativeSegment: number[] = [];

    for (let j = 1; j <= stepsPerSegment; j++) {
      const positiveValue = j * (positivePulseValue / stepsPerSegment);
      const negativeValue = j * (negativePulseValue / stepsPerSegment);
      positiveSegment.push(Number(positiveValue.toFixed(2))); // Round to two decimal places
      negativeSegment.push(Number(negativeValue.toFixed(2))); // Round to two decimal places
    }

    for (let i = 0; i <= 4 * stepsPerSegment; i++) {
      const segment = {
        value: 0,
        start: i * pulseDuration,
        end: i * pulseDuration + pulseDuration - 1,
      };
      singlePulseSegment.push(segment);
    }

    const pulseVoltage = [
      ...positiveSegment,
      ...positiveSegment.reverse(),
      0,
      ...negativeSegment,
      ...negativeSegment.reverse(),
    ];

    const consecutivePulseSegment = singlePulseSegment.map((item, index) => {
      return { ...item, value: pulseVoltage[index] };
    });

    const waveform = [...consecutivePulseSegment];
    return waveform;
  }
  const intermediatePositivePulseSegmentConsecutive =
    generateIntermediatePositivePulseSegmentConsecutive(
      stepsPerSegment,
      positivePulseValue,
      negativePulseValue
    );

  // Create an array with the positive and negative pulse segments
  const pulseSegments: PulseSegment[] = [
    ...intermediatePositivePulseSegmentConsecutive,
  ];

  // Generate the multi-pulse voltage array with the alternating pulses
  const voltageArray: number[] = generateMultiPulseVoltageArray(
    pulseLength,
    pulseSegments
  );

  // Calculate the number of voltageArray cycles required to achieve the desired number of total cycles
  const totalCycles = cycles;
  const totalSamples = totalCycles * voltageArray.length;

  // Generate the continuous waveform by cycling through voltageArray values
  const continuousWaveform: number[] = Array.from(
    { length: totalSamples },
    (_, index) => {
      const voltageArrayIndex = index % voltageArray.length;
      return voltageArray[voltageArrayIndex];
    }
  );

  const timeValues = Array.from({ length: pulseLength }, (_, index) => index);

  return {
    timeValues: timeValues,
    continuousWaveform: continuousWaveform,
  };
};
