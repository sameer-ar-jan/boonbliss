import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Typography } from "@mui/material";

export default function LetterAvatars(props) {
  return (
    <Stack sx={{ marginTop: "5px" }} direction="row" spacing={2}>
      <Avatar sx={{ background: "#00BFB3" }}>{props.num}</Avatar>
      <Typography sx={{ marginTop: "8px !important", color: "#393939" }}>
        {props.msg}
      </Typography>
    </Stack>
  );
}
