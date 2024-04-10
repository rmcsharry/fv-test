"use client"

import { ThemeProvider, CssBaseline } from "@mui/material";
import lightTheme from "../themes/lightTheme";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
