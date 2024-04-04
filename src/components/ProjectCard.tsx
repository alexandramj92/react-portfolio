import React, { FunctionComponent } from "react";
import { Box, Button, Card, Stack, Typography, useTheme } from "@mui/material";

import "@fontsource-variable/dancing-script";
import { palette } from "../utils/colors";

interface ProjectCardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  githubLink?: string;
  liveAppLink?: string;
}

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  children,
  title,
  description,
  githubLink,
  liveAppLink,
}) => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: theme.palette.custom.offWhite,
        // backgroundColor: 'transparent',
        height: "300px",
        width: "210px",
        border: `4px double ${theme.palette.primary.main}`,
        borderRadius: "8px",
        padding: "15px",
        position: "relative",
      }}
    >
      <Typography marginBottom="20px" variant="h2">
        {title}
      </Typography>
      <Typography>{description}</Typography>
      <Stack
        display="flex"
        direction="row"
        spacing={2}
        width="100%"
        justifyContent="center"
        position="absolute"
        left={0}
        bottom={30}
      >
        <Button
          onClick={() => githubLink && window.open(githubLink, "_blank")}
          variant="contained"
          sx={{
            color: theme.palette.custom.offWhite,
          }}
        >
          Github
        </Button>
        <Button
          onClick={() => liveAppLink && window.open(liveAppLink, "_blank")}
          variant="outlined"
        >
          Live App
        </Button>
      </Stack>

      {children}
    </Card>
  );
};
