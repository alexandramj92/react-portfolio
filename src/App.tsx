import React from "react";
// Supports weights 100-900
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@fontsource/urbanist";
import "./App.css";
import { Portfolio } from "./pages/Portfolio";
import { palette } from "./utils/colors";
import { breakpoints } from "./utils/breakpoints";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Urbanist", "sans-serif"].join(","),
      h1: {
        fontSize: "3rem",
        fontWeight: 900,
        [`@media (max-width:${breakpoints.sm}px)`]: {
          fontSize: "2.25rem",
        },
      },
      h2: { fontSize: "2.25rem", fontWeight: 500 },
    },
    palette: {
      ...palette,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
