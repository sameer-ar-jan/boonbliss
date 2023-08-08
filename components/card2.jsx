import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  return (
    <Card
      sx={{
        height: "80px",
        width: "230px",
        borderRadius: "10px",
        "box-shadow":
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            height: props.set ? "10px" : "10px",
            width: props.set ? "50px" : "30px",
          }}
          src={props.img}
        ></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.msg}
        </Typography>
      </CardContent>
    </Card>
  );
}
