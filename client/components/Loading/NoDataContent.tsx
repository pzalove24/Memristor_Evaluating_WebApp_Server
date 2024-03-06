import { TNoDataContent } from "@/types/Loading/LoadingApiType";
import { Box, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

export const NoDataContent = ({ text }: TNoDataContent) => {
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
        <DescriptionIcon fontSize="large" />
      </Box>
      <Typography fontSize={"14px"} fontWeight={"400"}>
        {text || "No Data Available"}
      </Typography>
    </Box>
  );
};
