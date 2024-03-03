import { TLoadingApi } from "@/types/Loading/LoadingApiType";
import { Box, CircularProgress, Typography } from "@mui/material";

export const LoadingApi = ({ text }: TLoadingApi) => {
  return (
    <Box
      style={{
        textAlignLast: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: "100px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: "0",
            left: "0",
            background: "#DDDDDD",
            opacity: "0.3",
            width: "100%",
            height: "20%",
            borderRadius: "50%",
            translate: "0% -50%",
            scale: "0.9",
          },
        }}
      >
        <CircularProgress
          sx={{
            rotate: "-90deg",
            fontSize: "4rem",
            color: "#D4D9DF",
            scale: "0.9 -0.9",
          }}
          disableShrink
        />
      </Box>
      <Typography fontSize={"14px"} fontWeight={"400"}>
        {text || "Loading..."}
      </Typography>
    </Box>
  );
};
