import { createTheme } from "@mui/material";
const theme = createTheme({
  cssVariables: true,
  palette: {
    background: {
      paper: "#282828",
    },
    text: {
      primary: "#ffffff",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(2px)",
        },
      },
    },
  },
});
export default theme;
