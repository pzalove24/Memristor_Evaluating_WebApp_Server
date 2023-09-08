import { WaveFunctionConductancePulseTime } from "./WaveFunctionConductancePulseTime";

addEventListener("message", (e) => {
  const { conductancePulseNumberWaveformValue } = e.data;

  // Perform the computation
  const result = WaveFunctionConductancePulseTime(
    conductancePulseNumberWaveformValue
  );

  // Post the result back to the main thread
  postMessage(result);
});
