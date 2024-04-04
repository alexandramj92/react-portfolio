import React from "react";
import { Box, Card, Stack, Typography, useTheme } from "@mui/material";

import "@fontsource-variable/dancing-script";
import { palette } from "../utils/colors";
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => {
  const theme = useTheme();

  return (
    <Box textAlign="left" width="100%" height="100%">
      <Typography marginBottom="40px" variant="h1" color="textPrimary">
        Projects
      </Typography>
      <Stack display="flex" direction="row" spacing={2}>
        <ProjectCard
          title="Pomo Tasker"
          description="A CRUD productivity dashboard complete with a pomodoro timer, task management, and productivity stats."
          githubLink="https://github.com/alexandramj92/pomodoro-timer"
          liveAppLink="https://pomo-tasker-405fd1be4689.herokuapp.com/signup"
        />
      </Stack>
    </Box>
  );
};
