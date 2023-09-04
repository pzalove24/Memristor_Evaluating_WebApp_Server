export type WaveFunctionPulseRetentionTimeWaveformProps = {
  positivePulseValue: number;
  intermediatePulseValue: number;
  negativePulseValue: number;
  positivePulseDuration: number; // Duration of each pulse
  intermediatePulseDuration: number; // Duration of each pulse
  negativePulseDuration: number; // Duration of each pulse
  distanceBetweenPulse: number; // Distance between pulses
  cycleIntermediatePulse: number; // cycle of intermediate pulse
  cycles: number; // Number of times to repeat the waveform
};

export const WaveFunctionPulseRetentionTimeWaveform = ({
  positivePulseValue,
  intermediatePulseValue,
  negativePulseValue,
  positivePulseDuration,
  intermediatePulseDuration,
  negativePulseDuration,
  distanceBetweenPulse,
  cycleIntermediatePulse,
  cycles,
}: WaveFunctionPulseRetentionTimeWaveformProps) => {
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

  //   const positivePulseValue: number = 3;
  //   const intermediatePulseValue: number = 1;
  //   const negativePulseValue: number = -3;
  //   const positivePulseDuration: number = 40; // Duration of each pulse
  //   const intermediatePulseDuration: number = 40; // Duration of each pulse
  //   const negativePulseDuration: number = 40; // Duration of each pulse
  //   const distanceBetweenPulse: number = 40; // Distance between pulses
  //   const cycleIntermediatePulse: number = 6; // cycle of intermediate pulse
  //   const cycles: number = 1; // Number of times to repeat the waveform
  const pulseLength: number =
    positivePulseDuration +
    distanceBetweenPulse +
    cycleIntermediatePulse *
      (intermediatePulseDuration + distanceBetweenPulse) +
    negativePulseDuration +
    distanceBetweenPulse +
    cycleIntermediatePulse * (intermediatePulseDuration + distanceBetweenPulse);

  // Generate the positive and negative pulse segments
  const positivePulseSegment: PulseSegment = {
    value: positivePulseValue,
    start: 0,
    end: positivePulseDuration - 1,
  };

  function generateIntermediatePositivePulseSegmentConsecutive(
    cycleNumber: number
  ) {
    const intermediatePulseSegments = [];

    for (let i = 0; i < cycleNumber; i++) {
      const segment = {
        value: intermediatePulseValue,
        start:
          positivePulseDuration +
          distanceBetweenPulse +
          i * (intermediatePulseDuration + distanceBetweenPulse),
        end:
          positivePulseDuration +
          distanceBetweenPulse +
          i * (intermediatePulseDuration + distanceBetweenPulse) +
          intermediatePulseDuration -
          1,
      };
      intermediatePulseSegments.push(segment);
    }

    return intermediatePulseSegments;
  }
  const intermediatePositivePulseSegmentConsecutive =
    generateIntermediatePositivePulseSegmentConsecutive(cycleIntermediatePulse);

  const negativePulseSegment: PulseSegment = {
    value: negativePulseValue,
    start:
      positivePulseDuration +
      distanceBetweenPulse +
      cycleIntermediatePulse *
        (intermediatePulseDuration + distanceBetweenPulse),
    end:
      positivePulseDuration +
      distanceBetweenPulse +
      cycleIntermediatePulse *
        (intermediatePulseDuration + distanceBetweenPulse) +
      negativePulseDuration -
      1,
  };

  function generateIntermediateNegativePulseSegmentConsecutive(
    cycleNumber: number
  ) {
    const intermediatePulseSegments = [];

    for (let i = 0; i < cycleNumber; i++) {
      const segment = {
        value: intermediatePulseValue,
        start:
          positivePulseDuration +
          distanceBetweenPulse +
          cycleIntermediatePulse *
            (intermediatePulseDuration + distanceBetweenPulse) +
          negativePulseDuration +
          distanceBetweenPulse +
          i * (intermediatePulseDuration + distanceBetweenPulse),
        end:
          positivePulseDuration +
          distanceBetweenPulse +
          cycleIntermediatePulse *
            (intermediatePulseDuration + distanceBetweenPulse) +
          negativePulseDuration +
          distanceBetweenPulse +
          i * (intermediatePulseDuration + distanceBetweenPulse) +
          intermediatePulseDuration -
          1,
      };
      intermediatePulseSegments.push(segment);
    }

    return intermediatePulseSegments;
  }
  const intermediateNegativePulseSegmentConsecutive =
    generateIntermediateNegativePulseSegmentConsecutive(cycleIntermediatePulse);

  const betweenCyclePulseSegment: PulseSegment = {
    value: intermediatePulseValue,
    start:
      positivePulseDuration +
      distanceBetweenPulse +
      cycleIntermediatePulse *
        (intermediatePulseDuration + distanceBetweenPulse) +
      negativePulseDuration +
      distanceBetweenPulse +
      cycleIntermediatePulse *
        (intermediatePulseDuration + distanceBetweenPulse),
    end:
      positivePulseDuration +
      distanceBetweenPulse +
      cycleIntermediatePulse *
        (intermediatePulseDuration + distanceBetweenPulse) +
      negativePulseDuration +
      distanceBetweenPulse +
      cycleIntermediatePulse *
        (intermediatePulseDuration + distanceBetweenPulse) -
      1,
  };

  // Create an array with the positive and negative pulse segments
  const pulseSegments: PulseSegment[] = [
    positivePulseSegment,
    negativePulseSegment,
    betweenCyclePulseSegment,
  ];

  pulseSegments.splice(1, 0, ...intermediatePositivePulseSegmentConsecutive);
  pulseSegments.splice(3, 0, ...intermediateNegativePulseSegmentConsecutive);

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
