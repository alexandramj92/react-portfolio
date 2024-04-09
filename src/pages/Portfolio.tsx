import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Grid,
  Link,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import ArticleIcon from "@mui/icons-material/Article";
import MessageIcon from "@mui/icons-material/Message";
// Supports weights 400-700
import "@fontsource-variable/dancing-script";
import NavigationBar from "../components/NavigationBar";
import { ProjectSection } from "../components/ProjectSection";
import { ResumeSection } from "../components/ResumeSection";
import { ContactSection } from "../components/ContactSection";
import { breakpoints } from "../utils/breakpoints";
import NameGraphic from "../components/NameGraphic";
import LaptopPlantGraphic from "../components/LaptopPlantGraphic";

export const Portfolio = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const isMedium = useMediaQuery(`(max-width:${breakpoints.md}px)`);

  const isLarge = useMediaQuery(`(max-width:${breakpoints.lg}px)`);

  return (
    <Grid container direction="row">
      <Grid
        id="home"
        item
        container
        xs={12}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          height="100vh"
          sx={{
            backgroundColor: isMedium
              ? theme.palette.custom.offWhite
              : theme.palette.primary.main,
          }}
        >
          {!isMedium && <NavigationBar />}
          {isMedium && <NameGraphic />}

          <Box
            textAlign="left"
            marginLeft="auto"
            padding="40px"
            marginTop={isLarge ? "80px" : !isMedium ? "150px" : 0}
          >
            <Typography color="textPrimary" variant="h1">
              Full Stack Developer extraordinaire: Turning complex code into
              user delight with a rich blend of React, Node, and TypeScript
              mastery!
            </Typography>
          </Box>
          {isMedium && <LaptopPlantGraphic />}
        </Grid>
        <Grid
          position="relative"
          item
          xs={12}
          display={isMedium ? "none" : "block"}
          md={4}
          height="100vh"
          sx={{ backgroundColor: theme.palette.custom.offWhite }}
        >
          {!isMedium && <NameGraphic />}
          {!isMedium && <LaptopPlantGraphic />}
        </Grid>
      </Grid>
      <Grid
        item
        id="projects"
        xs={12}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.secondary.main,
          padding: "30px",
        }}
      >
        <ProjectSection />
      </Grid>
      <Grid
        id="resume"
        item
        xs={12}
        sx={{
          minHeight: isMedium ? "100vh" : "unset",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.custom.yellow,
          padding: "30px",
        }}
      >
        <ResumeSection />
      </Grid>
      <Grid
        id="contact"
        item
        container
        xs={12}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <ContactSection />
      </Grid>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: !isMedium ? "none" : "unset",
        }}
        elevation={3}
      >
        <BottomNavigation
                    sx={{ backgroundColor: theme.palette.custom.offWhite }}

          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            href="#home"
            label="home"
            sx={{ backgroundColor: theme.palette.custom.offWhite }}
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            href="#projects"
            label="projects"
            icon={<AppsIcon />}
            sx={{ backgroundColor: theme.palette.custom.offWhite }}
          />
          <BottomNavigationAction
            label="resume"
            component={Link}
            href="#resume"
            icon={<ArticleIcon />}
            sx={{ backgroundColor: theme.palette.custom.offWhite }}
          />
          <BottomNavigationAction
            label="contact"
            component={Link}
            href="#contact"
            icon={<MessageIcon />}
            sx={{ backgroundColor: theme.palette.custom.offWhite }}
          />
        </BottomNavigation>
      </Paper>
    </Grid>
  );
};
