import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function NavigationBar() {
  return (
    <Box
      display="flex"
      alignItems="center"
      textAlign="center"
      justifyContent="left"
      padding="10px"
    >
      <Typography color="textPrimary" sx={{ minWidth: 100, fontWeight: 600 }}>projects</Typography>
      <Typography color="textPrimary" sx={{ minWidth: 100, fontWeight: 600 }}>resume</Typography>
      <Typography color="textPrimary" sx={{ minWidth: 100, fontWeight: 600 }}>contact</Typography>
    </Box>
  );
}
