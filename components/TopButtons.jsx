import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack sx={{ marginRight: "280px" }} spacing={2} direction="row">
      <Button
        sx={{
          marginTop: "5px !important",
          height: "30px",
          width: "20px !important",
          border: "1px solid grey",
          borderRadius: "10px",
          color: "grey",
        }}
        variant="text"
      >
        NL
      </Button>
      <Button
        sx={{
          "background-color": "#EE507F",
          color: "white",
          borderRadius: "50px",
          "&:hover": {
            backgroundColor: "#EE507F",
          },
        }}
        variant="contained"
      >
        Create a list
      </Button>
      <Button
        sx={{
          borderColor: "#00C0B3",
          borderRadius: "50px",
          color: "#00C0B3",
          "&:hover": {
            borderColor: "#00C0B3",
            borderRadius: "50px",
            color: "#00C0B3",
          },
        }}
        variant="outlined"
      >
        Login
      </Button>
    </Stack>
  );
}
