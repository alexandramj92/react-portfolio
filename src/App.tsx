import React from "react";
// Supports weights 100-900
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@fontsource/urbanist";
import "./App.css";
import { Portfolio } from "./pages/Portfolio";
import { palette } from "./utils/colors";

const theme = createTheme({
  typography: {
    fontFamily: ["Urbanist", "sans-serif"].join(","),
    h1: { fontSize: "3rem", fontWeight: 900 },
  },
  palette: {
    ...palette,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
