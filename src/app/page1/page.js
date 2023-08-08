"use client";
import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
// import { useEffect, useState } from "react";
import LetterAvatars from "../../../components/avatar";
import BasicCard from "../../../components/card";
import SimpleBottomNavigation from "../../../components/Footer";
import SimpleBottomNavigation2 from "../../../components/Footer2";
import ButtonAppBar2 from "../../../components/TopBar2";
import ButtonAppBar from "../../../components/TopBar";
// import { Nunito} from "next/fxont/google";
import "./page.module.css";

export default function Home() {
  const [screenResolution, setScreenResolution] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setScreenResolution({
        width: window.screen.width,
        height: window.screen.height,
      });
    };

    // Add a listener to update the screen resolution when the window is resized
    window.addEventListener("resize", handleResize);

    // Initialize the screen resolution on component mount
    setScreenResolution({
      width: window.screen.width,
      height: window.screen.height,
    });

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {screenResolution.width > 900 ? (
        <Box>
          <Head>
            <title>Home App</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap"
              rel="stylesheet"
            />
          </Head>
          {/* {screenResolution.width} */}
          <ButtonAppBar screenWidth={screenResolution.width} />
          <Box
            sx={{
              backgroundColor: "white",
              height: "100vh",
              width: "100vw",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box sx={{ paddingTop: "170px", marginLeft: "300px" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    // marginTop: "100px",
                    src: 'url("../../../fonts/Nunito/static/Nunito-Regular.ttf") format("truetype")',
                    fontSize: "48px",
                    fontWeight: "800",
                    fontFamily: "'Nunito', sans-serif",
                    color: "#4C4C4C",
                  }}
                >
                  {"Welcome to "}
                </Typography>
                <Typography
                  sx={{
                    // marginTop: "100px",
                    marginLeft: "20px",
                    fontFamily: "'Nunito', sans-serif !important",
                    fontWeight: "800",
                    color: "#EE507F",
                    fontSize: "48px",
                  }}
                >
                  Boon & Bliss
                </Typography>
              </Box>
              <Typography
                sx={{
                  marginTop: "20px",
                  height: "54px",
                  width: "501px",
                  fontWeight: "800",
                  // fontFamily: "'Nunito', sans-serif",,
                  fontSize: "20px",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4C4C4C",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Sit sed id ipsum
                consectetur convallis etiam pellentesque.
              </Typography>
              <Button
                sx={{
                  height: "40px !important",
                  marginTop: "20px",
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
              <Typography
                sx={{
                  marginTop: "30px",
                  fontSize: "16px",
                  height: "54px",
                  width: "501px",
                  fontWeight: "800",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4C4C4C",
                }}
              >
                How it works:
              </Typography>
              <LetterAvatars num={1} msg={"Download Boon & Bliss App"} />
              <LetterAvatars
                num={2}
                msg={"Create a dream, and it can be anything"}
              />
              <LetterAvatars
                num={3}
                msg={"Invite your friends to contribute to your dream"}
              />
              <Box
                sx={{
                  marginTop: "20px",
                  width: "700px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <BasicCard
                  img={"/users.png"}
                  msg="10,000+ users use Boon&Bliss"
                />
                <BasicCard
                  img={"/gift.png"}
                  msg="On average $400 per dream gift is raised"
                />
              </Box>
            </Box>
            <Box>
              <img
                style={{
                  marginLeft: "-200px ",
                  height: "90%",
                  width: "130%",
                }}
                src="/mainpic.png"
              ></img>
            </Box>
          </Box>
          <SimpleBottomNavigation screenWidth={screenResolution.width} />
        </Box>
      ) : (
        <Box>
          <Head>
            <title>Home App</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap"
              rel="stylesheet"
            />
          </Head>
          {/* {screenResolution.width} */}
          <ButtonAppBar2 screenWidth={screenResolution.width} />
          <Box
            sx={{
              backgroundColor: "white",
              height: "200vh",
              width: "100vw",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box sx={{ paddingTop: "100px", paddingLeft: "20px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    // marginTop: "100px",
                    src: 'url("../../../fonts/Nunito/static/Nunito-Regular.ttf") format("truetype")',
                    fontSize: "48px",
                    fontWeight: "800",
                    fontFamily: "'Nunito', sans-serif",
                    color: "#4C4C4C",
                  }}
                >
                  {"Welcome to "}
                </Typography>
                <Typography
                  sx={{
                    // marginTop: "100px",
                    // marginLeft: "20px",
                    fontFamily: "'Nunito', sans-serif !important",
                    fontWeight: "800",
                    color: "#EE507F",
                    fontSize: "48px",
                  }}
                >
                  Boon & Bliss
                </Typography>
              </Box>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  height: "54px",
                  // width: "501px",
                  fontWeight: "800",
                  // fontFamily: "'Nunito', sans-serif",,
                  fontSize: "16px",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4C4C4C",
                  // flexWrap: "wrap",
                }}
              >
                <p
                  style={{
                    // width: "501px",
                    fontWeight: "800",
                    // fontFamily: "'Nunito', sans-serif",,
                    fontSize: "16px",
                    fontFamily: "'Nunito', sans-serif",
                    color: "#4C4C4C",
                    // flexWrap: "wrap",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur.&nbsp;
                </p>{" "}
                <br />
                <div
                  style={{
                    // width: "501px",
                    fontWeight: "800",
                    // fontFamily: "'Nunito', sans-serif",,
                    fontSize: "16px",
                    fontFamily: "'Nunito', sans-serif",
                    color: "#4C4C4C",
                    // flexWrap: "wrap",
                  }}
                >
                  Sit sed id ipsum consectetur convallis
                </div>{" "}
                <br />
                <div
                  style={{
                    // width: "501px",
                    fontWeight: "800",
                    // fontFamily: "'Nunito', sans-serif",,
                    fontSize: "16px",
                    fontFamily: "'Nunito', sans-serif",
                    color: "#4C4C4C",
                    // flexWrap: "wrap",
                  }}
                >
                  etiam pellentesque.
                </div>
              </div>
              <Button
                sx={{
                  height: "40px !important",
                  marginTop: "100px",
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
              <Box>
                <img
                  style={{
                    // marginLeft: "-200px ",
                    height: "350px",
                    width: "350px",
                  }}
                  src="/mainpic.png"
                ></img>
              </Box>
              <Typography
                sx={{
                  marginTop: "30px",
                  fontSize: "16px",
                  height: "54px",
                  width: "501px",
                  fontWeight: "800",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4C4C4C",
                }}
              >
                How it works:
              </Typography>
              <LetterAvatars num={1} msg={"Download Boon & Bliss App"} />
              <LetterAvatars
                num={2}
                msg={"Create a dream, and it can be anything"}
              />
              <LetterAvatars
                num={3}
                msg={"Invite your friends to contribute to your dream"}
              />
              <Box
                sx={{
                  marginTop: "20px",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <BasicCard
                  img={"/users.png"}
                  msg="10,000+ users use Boon&Bliss"
                />
                <BasicCard
                  img={"/gift.png"}
                  msg="On average $400 per dream gift is raised"
                />
              </Box>
            </Box>
          </Box>
          <SimpleBottomNavigation2 screenWidth={screenResolution.width} />
        </Box>
      )}
    </>
  );
}
