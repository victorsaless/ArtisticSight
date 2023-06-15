import { createTheme } from "@mui/material/styles";

const Global = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4f2842b8",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Arial",
  },
});

export default Global;
