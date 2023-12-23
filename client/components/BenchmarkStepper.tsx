"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Stack from "@mui/material/Stack";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useBenchmarkStore, { benchmarkStatus } from "@/shared/benchmarkStore";
import handleCommand from "@/utils/Commands";
import useComPortSocket from "@/hooks/comPortSocket";

const steps = [
  {
    label: "Create Test Name",
    description: `Type the test name for benchmark.`,
  },
  {
    label: "Test Hardware Circuit",
    description: `Choose the hardware circuit version and test before the benchmark process.`,
  },
  {
    label: "Select the benchmark evaluation",
    description:
      "Select the desirable benchmark evaluation and be aware of damaged-device evalution process such as retention time and endurance cycle.",
  },
  {
    label: "Set up the benchmark input",
    description: `Put the benchmark input for the evaluation process of memristor.`,
  },
  {
    label: "Evaluation in progress",
    description: `Circuit is performing selected evaluations.`,
  },
  {
    label: "Finish Evaluation and Save data",
    description: `Evaluation is finished, and could be saved.`,
  },
];

export default function BenchmarkStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const {
    standardBenchmarkPulseSelection,
    standardBenchmarkSweepSelection,
    stabilityBenchmarkPulseSelection,
    stabilityBenchmarkSweepSelection,
    biorealisticBenchmarkSelection,
    advancedBenchmarkPulseSelection,
    advancedBenchmarkSweepSelection,
    benchmarkName,
    benchmarkStatus,
    updateStatus,
  } = useBenchmarkStore();

  const { serialPortTest } = useComPortSocket();

  console.log("pulse", standardBenchmarkPulseSelection);
  console.log("active", activeStep);
  const handleChangeBenchmarkStatusState = (currentActiveStep: number) => {
    switch (currentActiveStep) {
      case 0:
        updateStatus("TESTNAME");
        break;
      case 1:
        updateStatus("TESTHARDWARE");
        break;
      case 2:
        updateStatus("BENCHMARKSELECTION");
        break;
      case 3:
        updateStatus("INPUTSETUP");
        break;
      case 4:
        updateStatus("EVALUATION");
        break;
      case 5:
        updateStatus("FINISH");
        break;
      default:
        updateStatus("TESTNAME");
        break;
    }
  };

  console.log("status", benchmarkStatus);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleContinue = (currentStatus: benchmarkStatus) => {
    if (currentStatus === "TESTNAME") {
      if (benchmarkName === "") {
        return false;
      }
      return true;
    } else if (currentStatus === "TESTHARDWARE") {
      return true;
    } else if (currentStatus === "BENCHMARKSELECTION") {
      const isBenchmarkSelected = [
        standardBenchmarkPulseSelection,
        standardBenchmarkSweepSelection,
        stabilityBenchmarkPulseSelection,
        stabilityBenchmarkSweepSelection,
        biorealisticBenchmarkSelection,
        advancedBenchmarkPulseSelection,
        advancedBenchmarkSweepSelection,
      ].some((selection) => selection && selection?.length > 0);

      return isBenchmarkSelected;
    } else if (currentStatus === "INPUTSETUP") {
      return true;
    } else if (currentStatus === "EVALUATION") {
      return true;
    } else if (currentStatus === "FINISH") {
      return true;
    }
  };

  React.useEffect(() => {
    handleChangeBenchmarkStatusState(activeStep);
  }, [activeStep]);

  return (
    <Box sx={{ m: 3 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography color="secondary" variant="caption">
                    Last step
                  </Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  {benchmarkStatus === "TESTHARDWARE" && (
                    <Button
                      variant="contained"
                      color="info"
                      onClick={serialPortTest}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Test
                    </Button>
                  )}
                  <Button
                    disabled={!handleContinue(benchmarkStatus)}
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    color="secondary"
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            p: 3,
          }}
        >
          <Typography>
            All steps completed - software&apos;s ready to start benchmarking
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          >
            Start
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          >
            Reset
          </Button>
        </Stack>
      )}
    </Box>
  );
}
