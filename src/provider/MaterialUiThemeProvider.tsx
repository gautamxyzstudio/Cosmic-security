"use client";
import theme from "@/themes/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

export const MaterialUiThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
