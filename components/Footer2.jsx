"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        border: "2px solid #E8E8E8",
        width: "100vw",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        // "background-color": "red",
        color: "white",
        "text-align": "center",
      }}
    >
      <BottomNavigation
        sx={{ height: "167px" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <img style={{ width: "80%", height: "100%" }} src="/footer-2.png"></img>
      </BottomNavigation>
    </Box>
  );
}
