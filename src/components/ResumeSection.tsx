import React from "react";
import { Box, Link, Typography } from "@mui/material";
import resumeImage from "../assets/images/resumeImage.jpeg";

export const ResumeSection = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Typography variant="h1" color="textPrimary">
        Resume
      </Typography>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://resume.creddle.io/resume/hsdmjzmu6vl"
      >
        <img style={{ width: "100%" }} src={resumeImage} alt="resumeImg" />
      </Link>
    </Box>
  );
};
