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
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#868686",
          width: "25%",
          display: "flex",
          justifyContent: "center",
          maxWidth: "344px",
          padding: "26px 0px ",
          "@media (max-width: 768px)": {
            width: "212px",
            padding: "14px 0px !important",
            "&.MuiButtonBase-root": {
              gap: "4px !important",
              fontSize: "14px !important",
              lineHeight: "20px !important",
            },
          },
          "&.Mui-selected": {
            color: "#ffffff",
            background:
              "linear-gradient(180deg, #C1272D -15.62%, rgba(56, 56, 56, 0.00) 164.37%)",
          },
          "&.MuiButtonBase-root": {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontFamily: "Lato",
            fontSize: "20px",
            lineHeight: "28px",
          },
          ".MuiTab-icon":{
            marginBottom: "0px"
          }
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-flexContainer": {
            justifyContent: "space-between",
            alignItems: "center",
          },

          "& .MuiTabs-indicator": {
            display: "none",
          },
        },
      },
    },
  },
});
export default theme;
