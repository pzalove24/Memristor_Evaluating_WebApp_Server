import { Roboto } from "next/font/google";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { red, teal } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const colorGradient = {
  primary: {
    // blue // manually adjusted
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
  },
  secondary: {
    // yellow // manually adjusted
    50: "#fffde7",
    100: "#fff9c4",
    200: "#fff59d",
    300: "#fff176",
    400: "#ffee58",
    500: "#ffeb3b",
    600: "#fdd835",
    700: "#fbc02d",
    800: "#f9a825",
    900: "#f57f17",
  },
};

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      ...colorGradient.secondary,
      main: "#fbc02d",
      dark: "#f57f17",
      light: "#ffeb3b",
    },
    secondary: {
      ...colorGradient.secondary,
      main: "#66bb6a",
    },
    error: {
      main: red[400],
    },
    success: {
      main: teal["A400"],
    },
    background: {
      default: "#fff9c4",
      paper: "#fffde7",
    },
    text: {
      primary: "#000000",
      secondary: "#323848",
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
    fontSize: 12,
    h1: {
      fontFamily: roboto.style.fontFamily,
      fontSize: 40,
    },
    h2: {
      fontFamily: roboto.style.fontFamily,
      fontSize: 32,
    },
    h3: {
      fontFamily: roboto.style.fontFamily,
      fontSize: 24,
    },
    h4: {
      fontFamily: roboto.style.fontFamily,
      fontSize: 20,
    },
    h5: {
      fontFamily: roboto.style.fontFamily,
      fontSize: 16,
    },
    h6: {
      fontFamily: roboto.style.fontFamily,
      fontSize: 14,
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
