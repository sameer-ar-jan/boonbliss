import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BasicButtons from "./TopButtons";

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        zIndex: "1000",
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        border: "1px solid #E8E8E8",
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          height: "90px",
          "background-color": "white",
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          <img
            style={{ height: "40px", width: "120px", marginLeft: "280px" }}
            src="/logo.png"
          ></img>
          <BasicButtons />

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
