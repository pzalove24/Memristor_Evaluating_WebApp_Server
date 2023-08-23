import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Grid, Typography } from "@mui/material";

export default function ParameterInput() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={0.5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" fontWeight="bold">
            Parameter Input
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Parameter Input</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Name</InputLabel>
            <Input
              id="component-helper"
              placeholder="Composed TextField"
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">
              Some important helper text
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Typography>Parameter Input</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Name</InputLabel>
            <Input
              id="component-helper"
              placeholder="Composed TextField"
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">
              Some important helper text
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Typography>Parameter Input</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Name</InputLabel>
            <Input
              id="component-helper"
              placeholder="Composed TextField"
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">
              Some important helper text
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Typography>Parameter Input</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Name</InputLabel>
            <Input
              id="component-helper"
              placeholder="Composed TextField"
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">
              Some important helper text
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Typography>Parameter Input</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Name</InputLabel>
            <Input
              id="component-helper"
              placeholder="Composed TextField"
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">
              Some important helper text
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
