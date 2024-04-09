import React from "react";
import {
  Card,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GirlLaptop from "../assets/images/girl_laptop.png";
import { breakpoints } from "../utils/breakpoints";

export const ContactSection = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(`(max-width:${breakpoints.md}px)`);
  const isMobile = useMediaQuery(`(max-width:${breakpoints.sm}px)`);

  return (
    <Grid xs={10} md={5} item>
      <Card
        elevation={0}
        sx={{
          backgroundColor: theme.palette.custom.offWhite,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: isMobile ? "380px" : "400px",
          position: "relative",
          overflow: "visible",
          padding: isMedium ? "30px" : "50px",
        }}
      >
        <Stack display="flex" direction="column" spacing={2}>
          <Stack
            position="absolute"
            bottom={isMobile ? -18 : -15}
            left={60}
            display="flex"
            direction="row"
            height="60px"
            alignItems="center"
          >
            <Typography variant="h1" color="textPrimary">
              Hey There!
            </Typography>
            <img
              alt="girlLaptop"
              style={{
                height: "65px",
                width: "50px",
                marginLeft: "10px",
                display: isMedium ? "block" : "none",
              }}
              src={GirlLaptop}
            />
          </Stack>

          <Grid
            container
            display="flex"
            direction={isMedium ? "column" : "row"}
            alignItems="center"
          >
            <Grid item xs={12} md={8}>
              <Typography marginBottom="30px" variant="h2">
                Interested in connecting?
              </Typography>
              <Typography marginBottom={2}>
                Don't hesitate to send me an email at
                <strong> alexandra.michelle.j@gmail.com </strong>
                or contact me via socials.
              </Typography>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/alexandramj92"
                marginRight="10px"
              >
                <GitHubIcon />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/amj92/"
              >
                <LinkedInIcon />
              </Link>
            </Grid>
            <Grid item display="flex" md={4} alignItems="center">
              <img
                alt="girlLaptop"
                style={{
                  position: "absolute",
                  maxHeight: "370px",
                  right: "-105px",
                  display: isMedium ? "none" : "block",
                }}
                src={GirlLaptop}
              />
            </Grid>
          </Grid>
        </Stack>
      </Card>
    </Grid>
  );
};
