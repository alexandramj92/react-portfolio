import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import LaptopImage from "../assets/images/Laptop.png";
import PlantImage from "../assets/images/Tulip.png";
import LeavesImage from "../assets/images/Leaves_object.png";
import GirlLaptop from "../assets/images/girl_laptop.png"
// Supports weights 400-700
import "@fontsource-variable/dancing-script";
import NavigationBar from "../components/NavigationBar";
import { palette } from "../utils/colors";

export const Portfolio = () => {
  return (
    <Grid container direction="row">
      <Grid
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
          xs={8}
          height="100vh"
          sx={{ backgroundColor: palette.primary.main }}
        >
          <NavigationBar />

          <Box
            textAlign="left"
            marginLeft="auto"
            padding="40px"
            marginTop="150px"
          >
            <Typography color="textPrimary" variant="h1">
              Full Stack Developer extraordinaire: Turning complex code into
              user delight with a rich blend of React, Node, and TypeScript
              mastery!
            </Typography>
          </Box>
        </Grid>
        <Grid
          position="relative"
          item
          xs={4}
          height="100vh"
          sx={{ backgroundColor: "#f6f4f6" }}
        >
          <Stack display="flex" direction="row" padding="20px" marginLeft="5%">
            <Typography
              variant="h1"
              color="primary"
              fontSize="4rem"
              fontFamily="'Dancing Script Variable', cursive;"
            >
              alexandra
            </Typography>
            <img
              alt="girlLaptop"
              style={{ maxWidth: "50%", maxHeight: "70px", marginLeft: '10px' }}
              src={GirlLaptop}
            />
          </Stack>
          <Stack
            display="flex"
            direction="row"
            width="100%"
            marginTop="400px"
            marginLeft="-300px"
          >
            <img
              alt="laptop"
              style={{ maxWidth: "50%", minWidth: "400px" }}
              src={LaptopImage}
            />

            <img
              alt="plant"
              style={{
                maxWidth: "50%",
                marginBottom: "30px",
                minWidth: "200px",
              }}
              src={PlantImage}
            />
          </Stack>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ad8fdb",
        }}
      >
        <Typography variant="h1" color="textPrimary">
          Projects
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fef8b3",
        }}
      >
        <Typography variant="h1" color="textPrimary">
          Resume
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6fdcbf",
        }}
      >
        <Typography variant="h1" color="textPrimary">
          Contact
        </Typography>
      </Grid>
    </Grid>
  );
};
