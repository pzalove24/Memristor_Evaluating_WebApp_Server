import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { TAdvancedBenchmarkType } from "./AdvancedBenchmarkPartOne";
import { FormikProps } from "formik";
import { DefaultBenchmarkChartType, DefaultBenchmarkLabel } from "@/types/chartType";

type TCheckedAdvancedBenchmark = {
  BenchmarkChartFormik: FormikProps<TAdvancedBenchmarkType>;
};

const CheckedAdvancedBenchmark = ({
  BenchmarkChartFormik,
}: TCheckedAdvancedBenchmark) => {
  // const MultiVoltageLevelSweepChildren = (
  //   <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
  //     {BenchmarkSelections.MultiVoltageLevelSweep.map(
  //       (element: any, index: any) => (
  //         <FormControlLabel
  //           key={index}
  //           label={Object.keys(element)[0]}
  //           control={
  //             <Checkbox
  //               name={Object.keys(element)[0]}
  //               checked={Object.values(element)[0] as boolean}
  //               onChange={(e) =>
  //                 handleChangeChildren(e, "MultiVoltageLevelSweep", index)
  //               }
  //             />
  //           }
  //         />
  //       )
  //     )}
  //   </Box>
  // );

  // const MultiVoltageLevelPulseChildren = (
  //   <Box
  //     sx={{
  //       display: "flex",
  //       flexDirection: "column",
  //       ml: 3,
  //     }}
  //   >
  //     {BenchmarkSelections.MultiVoltageLevelPulse.map(
  //       (element: any, index: any) => (
  //         <FormControlLabel
  //           key={index}
  //           label={Object.keys(element)[0]}
  //           control={
  //             <Checkbox
  //               name={Object.keys(element)[0]}
  //               checked={Object.values(element)[0] as boolean}
  //               onChange={(e) =>
  //                 handleChangeChildren(e, "MultiVoltageLevelPulse", index)
  //               }
  //             />
  //           }
  //         />
  //       )
  //     )}
  //   </Box>
  // );

  // const MultiCurrentLevelSweepChildren = (
  //   <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
  //     {BenchmarkSelections.MultiCurrentLevelSweep.map(
  //       (element: any, index: any) => (
  //         <FormControlLabel
  //           key={index}
  //           label={Object.keys(element)[0]}
  //           control={
  //             <Checkbox
  //               name={Object.keys(element)[0]}
  //               checked={Object.values(element)[0] as boolean}
  //               onChange={(e) =>
  //                 handleChangeChildren(e, "MultiCurrentLevelSweep", index)
  //               }
  //             />
  //           }
  //         />
  //       )
  //     )}
  //   </Box>
  // );

  // const MultiCurrentLevelPulseChildren = (
  //   <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
  //     {BenchmarkSelections.MultiCurrentLevelPulse.map(
  //       (element: any, index: any) => (
  //         <FormControlLabel
  //           key={index}
  //           label={Object.keys(element)[0]}
  //           control={
  //             <Checkbox
  //               name={Object.keys(element)[0]}
  //               checked={Object.values(element)[0] as boolean}
  //               onChange={(e) =>
  //                 handleChangeChildren(e, "MultiCurrentLevelPulse", index)
  //               }
  //             />
  //           }
  //         />
  //       )
  //     )}
  //   </Box>
  // );

  // const AdditionalAdvancedBenchmarkChildren = (
  //   <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
  //     {BenchmarkSelections.AdditionalAdvancedBenchmark.map(
  //       (element: any, index: any) => (
  //         <FormControlLabel
  //           key={index}
  //           label={Object.keys(element)[0]}
  //           control={
  //             <Checkbox
  //               name={Object.keys(element)[0]}
  //               checked={Object.values(element)[0] as boolean}
  //               onChange={(e) =>
  //                 handleChangeChildren(e, "AdditionalAdvancedBenchmark", index)
  //               }
  //             />
  //           }
  //         />
  //       )
  //     )}
  //   </Box>
  // );

  const { values, handleChange, setFieldValue } = BenchmarkChartFormik;

  //advancedBenchmarkPulse handle checkbox
  const handleCheckboxChangeAdvancedBenchmarkPulse = (index: number) => {
    const checkboxes = [...values.advancedBenchmarkPulse];
    checkboxes[index].chartTag = !checkboxes[index].chartTag;
    setFieldValue("advancedBenchmarkPulse", checkboxes);
  };

  const areAllCheckedAdvancedBenchmarkPulse =
    values.advancedBenchmarkPulse.every((checkbox) => checkbox.chartTag);
  const areSomeCheckedAdvancedBenchmarkPulse =
    values.advancedBenchmarkPulse.some((checkbox) => checkbox.chartTag);
  const indeterminateAdvancedBenchmarkPulse =
    !areAllCheckedAdvancedBenchmarkPulse &&
    areSomeCheckedAdvancedBenchmarkPulse;

  //advancedBenchmarkSweep handle checkbox

  const handleCheckboxChangeAdvancedBenchmarkSweep = (index: number) => {
    const checkboxes = [...values.advancedBenchmarkSweep];
    checkboxes[index].chartTag = !checkboxes[index].chartTag;
    setFieldValue("advancedBenchmarkSweep", checkboxes);
  };

  const areAllCheckedAdvancedBenchmarkSweep =
    values.advancedBenchmarkSweep.every((checkbox) => checkbox.chartTag);
  const areSomeCheckedAdvancedBenchmarkSweep =
    values.advancedBenchmarkSweep.some((checkbox) => checkbox.chartTag);
  const indeterminateAdvancedBenchmarkSweep =
    !areAllCheckedAdvancedBenchmarkSweep &&
    areSomeCheckedAdvancedBenchmarkSweep;

  // render checkbox
  const PulseVoltageChildren = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {values.advancedBenchmarkPulse.map(
        (chart: DefaultBenchmarkChartType, index: number) => (
          <FormControlLabel
            key={index}
            label={chart.title}
            control={
              <Checkbox
                name={chart.title}
                checked={chart.chartTag}
                onChange={() =>
                  handleCheckboxChangeAdvancedBenchmarkPulse(index)
                }
              />
            }
          />
        )
      )}
    </Box>
  );

  const SweepVoltageChildren = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: 3,
      }}
    >
      {values.advancedBenchmarkSweep.map(
        (chart: DefaultBenchmarkChartType, index: number) => (
          <FormControlLabel
            key={index}
            label={chart.title}
            control={
              <Checkbox
                name={chart.title}
                checked={chart.chartTag}
                onChange={() =>
                  handleCheckboxChangeAdvancedBenchmarkSweep(index)
                }
              />
            }
          />
        )
      )}
    </Box>
  );

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={4} md={4} lg={4} xl={4} xs>
          <Paper sx={{ height: "100%" }} elevation={4}>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="flex-start"
            >
              <FormControlLabel
                label={DefaultBenchmarkLabel.AdvancedBenchmarkPulseChart}
                control={
                  <Checkbox
                    checked={areAllCheckedAdvancedBenchmarkPulse}
                    indeterminate={indeterminateAdvancedBenchmarkPulse}
                    onChange={() => {
                      setFieldValue(
                        "advancedBenchmarkPulse",
                        values.advancedBenchmarkPulse.map((checkbox) => ({
                          ...checkbox,
                          chartTag: !areAllCheckedAdvancedBenchmarkPulse,
                        }))
                      );
                    }}
                  />
                }
              />
            </Box>
            {PulseVoltageChildren}
          </Paper>
        </Grid>
        <Grid item sm={4} md={4} lg={4} xl={4} xs>
          <Paper sx={{ height: "100%" }} elevation={4}>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="flex-start"
            >
              <FormControlLabel
                label={DefaultBenchmarkLabel.AdvancedBenchmarkSweepChart}
                control={
                  <Checkbox
                    checked={areAllCheckedAdvancedBenchmarkSweep}
                    indeterminate={indeterminateAdvancedBenchmarkSweep}
                    onChange={() => {
                      setFieldValue(
                        "advancedBenchmarkSweep",
                        values.advancedBenchmarkSweep.map((checkbox) => ({
                          ...checkbox,
                          chartTag: !areAllCheckedAdvancedBenchmarkSweep,
                        }))
                      );
                    }}
                  />
                }
              />
            </Box>
            {SweepVoltageChildren}
          </Paper>
        </Grid>
      </Grid>
    </>
    // <>
    //   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //     <Grid item sm={4} md={4} lg={4} xl={4} xs>
    //       <Paper sx={{ height: "100%" }} elevation={4}>
    //         <Box
    //           display={"flex"}
    //           justifyContent="center"
    //           alignItems="flex-start"
    //         >
    //           <FormControlLabel
    //             label="MultiVoltageLevelSweep"
    //             control={
    //               <Checkbox
    //                 checked={BenchmarkSelections.MultiVoltageLevelSweep.every(
    //                   (item: any) => item[Object.keys(item)[0]]
    //                 )}
    //                 indeterminate={
    //                   !BenchmarkSelections.MultiVoltageLevelSweep.every(
    //                     (item: any) => item[Object.keys(item)[0]]
    //                   ) &&
    //                   !BenchmarkSelections.MultiVoltageLevelSweep.every(
    //                     (item: any) => !item[Object.keys(item)[0]]
    //                   )
    //                 }
    //                 onChange={(e) =>
    //                   handleChangeAllChildren(e, "MultiVoltageLevelSweep")
    //                 }
    //               />
    //             }
    //           />
    //         </Box>
    //         {MultiVoltageLevelSweepChildren}
    //       </Paper>
    //     </Grid>
    //     <Grid item sm={4} md={4} lg={4} xl={4} xs>
    //       <Paper sx={{ height: "100%" }} elevation={4}>
    //         <Box
    //           display={"flex"}
    //           justifyContent="center"
    //           alignItems="flex-start"
    //         >
    //           <FormControlLabel
    //             label="MultiCurrentLevelSweep"
    //             control={
    //               <Checkbox
    //                 checked={BenchmarkSelections.MultiCurrentLevelSweep.every(
    //                   (item: any) => item[Object.keys(item)[0]]
    //                 )}
    //                 indeterminate={
    //                   !BenchmarkSelections.MultiCurrentLevelSweep.every(
    //                     (item: any) => item[Object.keys(item)[0]]
    //                   ) &&
    //                   !BenchmarkSelections.MultiCurrentLevelSweep.every(
    //                     (item: any) => !item[Object.keys(item)[0]]
    //                   )
    //                 }
    //                 onChange={(e) =>
    //                   handleChangeAllChildren(e, "MultiCurrentLevelSweep")
    //                 }
    //               />
    //             }
    //           />
    //         </Box>
    //         {MultiCurrentLevelSweepChildren}
    //       </Paper>
    //     </Grid>
    //     <Grid item sm={4} md={4} lg={4} xl={4} xs>
    //       <Paper sx={{ height: "100%" }} elevation={4}>
    //         <Box
    //           display={"flex"}
    //           justifyContent="center"
    //           alignItems="flex-start"
    //         >
    //           <FormControlLabel
    //             label="MultiVoltageLevelPulse"
    //             control={
    //               <Checkbox
    //                 checked={BenchmarkSelections.MultiVoltageLevelPulse.every(
    //                   (item: any) => item[Object.keys(item)[0]]
    //                 )}
    //                 indeterminate={
    //                   !BenchmarkSelections.MultiVoltageLevelPulse.every(
    //                     (item: any) => item[Object.keys(item)[0]]
    //                   ) &&
    //                   !BenchmarkSelections.MultiVoltageLevelPulse.every(
    //                     (item: any) => !item[Object.keys(item)[0]]
    //                   )
    //                 }
    //                 onChange={(e) =>
    //                   handleChangeAllChildren(e, "MultiVoltageLevelPulse")
    //                 }
    //               />
    //             }
    //           />
    //         </Box>
    //         {MultiVoltageLevelPulseChildren}
    //       </Paper>
    //     </Grid>
    //     <Grid item sm={4} md={4} lg={4} xl={4} xs>
    //       <Paper sx={{ height: "100%" }} elevation={4}>
    //         <Box
    //           display={"flex"}
    //           justifyContent="center"
    //           alignItems="flex-start"
    //         >
    //           <FormControlLabel
    //             label="MultiCurrentLevelPulse"
    //             control={
    //               <Checkbox
    //                 checked={BenchmarkSelections.MultiCurrentLevelPulse.every(
    //                   (item: any) => item[Object.keys(item)[0]]
    //                 )}
    //                 indeterminate={
    //                   !BenchmarkSelections.MultiCurrentLevelPulse.every(
    //                     (item: any) => item[Object.keys(item)[0]]
    //                   ) &&
    //                   !BenchmarkSelections.MultiCurrentLevelPulse.every(
    //                     (item: any) => !item[Object.keys(item)[0]]
    //                   )
    //                 }
    //                 onChange={(e) =>
    //                   handleChangeAllChildren(e, "MultiCurrentLevelPulse")
    //                 }
    //               />
    //             }
    //           />
    //         </Box>
    //         {MultiCurrentLevelPulseChildren}
    //       </Paper>
    //     </Grid>
    //     <Grid item sm={4} md={4} lg={4} xl={4} xs>
    //       <Paper sx={{ height: "100%" }} elevation={4}>
    //         <Box
    //           display={"flex"}
    //           justifyContent="center"
    //           alignItems="flex-start"
    //         >
    //           <FormControlLabel
    //             label="AdditionalAdvancedBenchmark"
    //             control={
    //               <Checkbox
    //                 checked={BenchmarkSelections.AdditionalAdvancedBenchmark.every(
    //                   (item: any) => item[Object.keys(item)[0]]
    //                 )}
    //                 indeterminate={
    //                   !BenchmarkSelections.AdditionalAdvancedBenchmark.every(
    //                     (item: any) => item[Object.keys(item)[0]]
    //                   ) &&
    //                   !BenchmarkSelections.AdditionalAdvancedBenchmark.every(
    //                     (item: any) => !item[Object.keys(item)[0]]
    //                   )
    //                 }
    //                 onChange={(e) =>
    //                   handleChangeAllChildren(e, "AdditionalAdvancedBenchmark")
    //                 }
    //               />
    //             }
    //           />
    //         </Box>
    //         {AdditionalAdvancedBenchmarkChildren}
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </>
  );
};

export default CheckedAdvancedBenchmark;
