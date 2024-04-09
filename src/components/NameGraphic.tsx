import * as React from "react";
import Typography from "@mui/material/Typography";
import { Stack, useMediaQuery } from "@mui/material";

import GirlLaptop from "../assets/images/girl_laptop.png";
import { breakpoints } from "../utils/breakpoints";

export default function NameGraphic() {
  const isMobile = useMediaQuery(`(max-width:${breakpoints.md}px)`);

  return (
    <Stack
      display="flex"
      direction="row"
      alignItems="center"
      padding="0 30px"
      height="100px"
      justifyContent={isMobile ? "right" : "left"}
    >
      <Typography
        color={isMobile ? "secondary" : "primary"}
        fontSize="2.75rem"
        fontWeight={700}
        lineHeight={0}
        fontFamily="'Dancing Script Variable', cursive;"
      >
        alexandra
      </Typography>
      <img
        alt="girlLaptop"
        style={{ maxHeight: "45px", marginLeft: "10px" }}
        src={GirlLaptop}
      />
    </Stack>
  );
}
