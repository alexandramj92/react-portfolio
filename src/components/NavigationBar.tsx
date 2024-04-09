import * as React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function NavigationBar() {
  return (
    <Box
      display="flex"
      alignItems="center"
      textAlign="left"
      justifyContent="left"
      padding="0 30px"
      height="100px"
    >
      <Link href="#projects">
        <Typography
          fontSize="1.5rem"
          color="textPrimary"
          sx={{ minWidth: 100, fontWeight: 600, textDecoration: "none" }}
        >
          projects
        </Typography>
      </Link>
      <Link href="#resume">
        <Typography
          fontSize="1.5rem"
          color="textPrimary"
          sx={{ minWidth: 100, fontWeight: 600, textDecoration: "none" }}
        >
          resume
        </Typography>
      </Link>
      <Link href="#contact">
        <Typography
          fontSize="1.5rem"
          color="textPrimary"
          sx={{ minWidth: 100, fontWeight: 600, textDecoration: "none" }}
        >
          contact
        </Typography>
      </Link>
    </Box>
  );
}
