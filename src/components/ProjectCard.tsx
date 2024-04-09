import React, { FunctionComponent } from "react";
import { Box, Button, Card, Stack, Typography, useTheme } from "@mui/material";

import "@fontsource-variable/dancing-script";

interface ProjectCardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  githubLink?: string;
  liveAppLink?: string;
  Logo?:
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >
    | string;
}

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  children,
  title,
  description,
  githubLink,
  liveAppLink,
  Logo,
}) => {
  const theme = useTheme();
  console.log(title, Logo, typeof Logo);
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: theme.palette.custom.offWhite,
        height: "430px",
        width: "250px",
        border: `4px double ${theme.palette.primary.main}`,
        borderRadius: "8px",
        padding: "15px",
        position: "relative",
      }}
    >
      <Typography marginBottom={Logo ? "5px" : "20px"} variant="h2">
        {title}
      </Typography>
      <Box textAlign="center">
        {typeof Logo === "string" ? (
          <img style={{ maxHeight: "60px" }} src={Logo} alt={`${title} logo`} />
        ) : (
          Logo && <Logo title={title} />
        )}
      </Box>
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
        {githubLink && (
          <Button
            onClick={() => window.open(githubLink, "_blank")}
            variant="contained"
            sx={{
              color: theme.palette.custom.offWhite,
            }}
          >
            Github
          </Button>
        )}
        {liveAppLink && (
          <Button
            onClick={() => window.open(liveAppLink, "_blank")}
            variant="outlined"
          >
            Live App
          </Button>
        )}
      </Stack>
      {children}
    </Card>
  );
};
