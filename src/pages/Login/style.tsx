import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    customColor1?: PaletteColorOptions;
    customColor2?: PaletteColorOptions;
  }
}
const Global = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff01019f",
    },
    secondary: {
      main: "#ffffff",
    },
    customColor1: {
      main: "#7a0a0a82",
    },
    customColor2: {
      main: "#00ff00",
    },
  },
  typography: {
    fontFamily: "Arial",
  },
});

export default Global;
