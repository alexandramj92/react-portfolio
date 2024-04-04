import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      yellow: string;
      blue: string;
      offWhite: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      yellow: string;
      blue: string;
      offWhite: string;
    };
  }
}

export const palette = {
  primary: {
    main: "#6fdcbf",
    contrastText: "#404040",
  },
  secondary: { main: "#ad8fdb" },
  error: {
    main: "#f44336",
  },
  warning: {
    main: "#ff9800",
  },
  info: {
    main: "#2196f3",
  },
  success: {
    main: "#4caf50",
  },
  custom: {
    // Custom color
    yellow: "#fef8b3",
    blue: "#ffffff",
    offWhite: "#f6f4f6",
  },

  text: {
    primary: "#404040",
    // secondary, disabled, hint could also be defined here
  },
};
