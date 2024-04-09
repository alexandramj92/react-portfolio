import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

import { ProjectCard } from "./ProjectCard";
import { projects } from "../assets/data/projects";
import { ScrollingContainer } from "./ScrollingContainer";
import { breakpoints } from "../utils/breakpoints";

export const ProjectSection = () => {
  const isMobile = useMediaQuery(`(max-width:${breakpoints.sm}px)`);
  const isMedium = useMediaQuery(`(max-width:${breakpoints.md}px)`);

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      width="100%"
    >
      <Typography marginBottom="50px" variant="h1" color="textPrimary">
        Projects
      </Typography>
      <ScrollingContainer
        gridAutoColumns={isMobile ? "400px" : "300px"}
        maxContainerWidth={isMobile ? "300px" : isMedium ? "600px" : "100%"}
      >
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveAppLink={project.liveAppLink}
            Logo={project.image}
          />
        ))}
      </ScrollingContainer>
    </Box>
  );
};
