export type WaveFunctionConductancePulseTimeProps = {
  positivePulseValue: number;
  intermediatePulseValue: number;
  negativePulseValue: number;
  positivePulseDuration: number; // Duration of each pulse
  intermediatePulseDuration: number; // Duration of each pulse
  negativePulseDuration: number; // Duration of each pulse
  distanceBetweenPulse: number; // Distance between pulses
  cycleReadingPulse: number; // cycle of intermediate pulse
  cycles: number; // Number of times to repeat the waveform
};

export const WaveFunctionConductancePulseTime = ({
  positivePulseValue,
  intermediatePulseValue,
  negativePulseValue,
  positivePulseDuration,
  intermediatePulseDuration,
  negativePulseDuration,
  distanceBetweenPulse,
  cycleReadingPulse,
  cycles,
}: WaveFunctionConductancePulseTimeProps) => {
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
  // const intermediatePulseValue: number = 1;
  // const negativePulseValue: number = -3;
  // const positivePulseDuration: number = 20; // Duration of each pulse
  // const intermediatePulseDuration: number = 20; // Duration of each pulse
  // const negativePulseDuration: number = 20; // Duration of each pulse
  // const distanceBetweenPulse: number = 20; // Distance between pulses
  // const cycleReadingPulse: number = 4; // cycle of intermediate pulse
  // const cycles: number = 1; // Number of times to repeat the waveform
  const pulseLength: number =
    cycleReadingPulse *
      (positivePulseDuration +
        distanceBetweenPulse +
        intermediatePulseDuration +
        distanceBetweenPulse) +
    cycleReadingPulse *
      (negativePulseDuration +
        distanceBetweenPulse +
        intermediatePulseDuration +
        distanceBetweenPulse);

  // Generate the positive and negative pulse segments

  function generatePositivePulseSegmentConsecutive(cycleNumber: number) {
    const positiveReadingPulseSegments = [];

    for (let i = 0; i < cycleNumber; i++) {
      const positivePulseSegment: PulseSegment = {
        value: positivePulseValue,
        start:
          i *
          (positivePulseDuration +
            distanceBetweenPulse +
            intermediatePulseDuration +
            distanceBetweenPulse),
        end:
          i *
            (positivePulseDuration +
              distanceBetweenPulse +
              intermediatePulseDuration +
              distanceBetweenPulse) +
          positivePulseDuration -
          1,
      };
      const intermediatePulseSegment = {
        value: intermediatePulseValue,
        start:
          positivePulseDuration +
          distanceBetweenPulse +
          i *
            (positivePulseDuration +
              distanceBetweenPulse +
              intermediatePulseDuration +
              distanceBetweenPulse),
        end:
          positivePulseDuration +
          distanceBetweenPulse +
          i *
            (positivePulseDuration +
              distanceBetweenPulse +
              intermediatePulseDuration +
              distanceBetweenPulse) +
          intermediatePulseDuration -
          1,
      };
      positiveReadingPulseSegments.push(positivePulseSegment);
      positiveReadingPulseSegments.push(intermediatePulseSegment);
    }

    return positiveReadingPulseSegments;
  }
  const positivePulseSegmentConsecutive =
    generatePositivePulseSegmentConsecutive(cycleReadingPulse);

  function generateNegativePulseSegmentConsecutive(cycleNumber: number) {
    const negativeReadingPulseSegments = [];

    for (let i = 0; i < cycleNumber; i++) {
      const negativePulseSegment: PulseSegment = {
        value: negativePulseValue,
        start:
          cycleReadingPulse *
            (positivePulseDuration +
              distanceBetweenPulse +
              intermediatePulseDuration +
              distanceBetweenPulse) +
          i *
            (negativePulseDuration +
              distanceBetweenPulse +
              intermediatePulseDuration +
              distanceBetweenPulse),
        end:
          cycleReadingPulse *
            (positivePulseDuration +
              distanceBetweenPulse +
              intermediatePulseDuration +
              distanceBetweenPulse) +
          i *
            (negativePulseDuration +
              distanceBetweenPulse +
              intermediatePulseDuration +
              distanceBetweenPulse) +
          negativePulseDuration -
          1,
      };
      const intermediatePulseSegment = {
        value: intermediatePulseValue,
        start:
          cycleReadingPulse *
            (positivePulseDuration +
              distanceBetweenPulse +
              intermediatePulseDuration +
              distanceBetweenPulse) +
          negativePulseDuration +
          distanceBetweenPulse +
          i *
            (negativePulseDuration +
              distanceBetweenPulse +
              intermediatePulseDuration +
              distanceBetweenPulse),
        end:
          cycleReadingPulse *
            (positivePulseDuration +
              distanceBetweenPulse +
              intermediatePulseDuration +
              distanceBetweenPulse) +
          negativePulseDuration +
          distanceBetweenPulse +
          i *
            (negativePulseDuration +
              distanceBetweenPulse +
              intermediatePulseDuration +
              distanceBetweenPulse) +
          intermediatePulseDuration -
          1,
      };
      negativeReadingPulseSegments.push(negativePulseSegment);
      negativeReadingPulseSegments.push(intermediatePulseSegment);
    }

    return negativeReadingPulseSegments;
  }
  const negativePulseSegmentConsecutive =
    generateNegativePulseSegmentConsecutive(cycleReadingPulse);

  // Create an array with the positive and negative pulse segments
  const pulseSegments: PulseSegment[] = [
    ...positivePulseSegmentConsecutive,
    ...negativePulseSegmentConsecutive,
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

  const timeValues = Array.from(
    {
      length: pulseLength,
    },
    (_, index) => index
  );

  return {
    timeValues: timeValues,
    continuousWaveform: continuousWaveform,
  };
};