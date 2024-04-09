import * as React from "react";
import { Stack, useMediaQuery } from "@mui/material";

import Computer from "../assets/images/Computer.png";
import PlantImage from "../assets/images/Tulip.png";
import { breakpoints } from "../utils/breakpoints";

export default function LaptopPlantGraphic() {
  const isMobile = useMediaQuery(`(max-width:${breakpoints.md}px)`);

  return (
    <Stack
      display="flex"
      direction="row"
      width="100%"
      alignItems={isMobile ? "center" : "unset"}
      justifyContent={isMobile ? "center" : "unset"}
      marginTop={isMobile ? 0 : "470px"}
      marginLeft={isMobile ? 0 : "-161px"}
    >
      <img
        alt="computer"
        style={{
          maxWidth: "400px",
          minWidth: isMobile ? "150px" : "200px",
          maxHeight: isMobile ? "150px" : "unset",
        }}
        src={Computer}
      />

      <img
        alt="plant"
        style={{
          maxWidth: "300px",
          marginLeft: "10px",
          minWidth: isMobile ? "150px" : "200px",
          maxHeight: isMobile ? "150px" : "unset",
        }}
        src={PlantImage}
      />
    </Stack>
  );
}
