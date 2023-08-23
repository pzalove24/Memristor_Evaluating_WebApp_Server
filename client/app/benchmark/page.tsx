import React from "react";
import {
  Stack,
  Paper,
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Header, BenchmarkStepper } from "@/components";
import { ParameterInput } from "@/components/Input/BenchmarkInput";

const benchmark = () => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Benchmark
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small">
          Learn More
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Stack direction={"column"}>
      <Header
        title="Benchmark"
        subtitle="Electrical Measurement for Memristor"
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            mt: 1,
            width: "100%",
            height: "auto",
          },
        }}
      >
        <Paper elevation={4}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* <Grid item xs={12}>
              <BenchmarkStepper />
            </Grid> */}

            <Grid item xs={12}>
              <Typography
                sx={{ mt: 2, ml: 2 }}
                color="secondary"
                display="block"
                variant="h3"
                fontWeight="bold"
              >
                Benchmark Input
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={4}>
                  <Box sx={{ m: 1 }}>
                    <Card variant="outlined">{card}</Card>
                    <Card variant="outlined">{card}</Card>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box sx={{ m: 1 }}>
                    <Card variant="outlined">
                      <ParameterInput />
                    </Card>
                    <Card variant="outlined">{card}</Card>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
              <Typography
                sx={{ mt: 0.5, ml: 2 }}
                color="secondary"
                display="block"
                variant="h3"
                fontWeight="bold"
              >
                Benchmark Result
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs>
                  <Paper sx={{ m: 1, height: 300, width: 325 }}>
                    <Card variant="outlined">{card}</Card>
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper sx={{ m: 1, height: 300, width: 325 }}>
                    <Card variant="outlined">{card}</Card>
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper sx={{ m: 1, height: 300, width: 325 }}>
                    <Card variant="outlined">{card}</Card>
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper sx={{ m: 1, height: 300, width: 325 }}>
                    <Card variant="outlined">{card}</Card>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs>
                  <Paper sx={{ m: 1, height: 300, width: 325 }}>
                    <Card variant="outlined">{card}</Card>
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper sx={{ m: 1, height: 300, width: 325 }}>
                    <Card variant="outlined">{card}</Card>
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper sx={{ m: 1, height: 300, width: 325 }}>
                    <Card variant="outlined">{card}</Card>
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper sx={{ m: 1, height: 300, width: 325 }}>
                    <Card variant="outlined">{card}</Card>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Stack>
  );
};

export default benchmark;
