import { Roboto } from "next/font/google";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { green, purple, red, teal } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: red[400],
    },
    success: {
      main: teal["A400"],
    },
    background: {
      default: "#f8bbd0",
    },
    text: {
      primary: "#300000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

const theme = createTheme(themeOptions);

export default theme;
