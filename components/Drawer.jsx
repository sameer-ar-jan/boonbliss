import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        role="presentation"
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
              <NativeSelect
                id="demo-customized-select-native"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option value={10}>EN</option>
                <option value={20}>EN</option>
                <option value={30}>EN</option>
              </NativeSelect>
            </FormControl>
            <CloseIcon
              sx={{ marginTop: "40px" }}
              onClick={toggleDrawer("right", false)}
            />
          </div>
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Button
              sx={{
                // width: "200px",

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
              onClick={handleOpen}
              sx={{
                marginTop: "10px",
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
          </div>
        </div>
        <div style={{ padding: "10px" }}>
          <img
            style={{ height: "100px", width: "180px" }}
            src="/buttons.png"
          ></img>
        </div>
      </Box>
    </>
  );

  return (
    <>
      {" "}
      <div>
        {
          <React.Fragment>
            <IconButton onClick={toggleDrawer("right", true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", true)}
            >
              {list("right")}
            </Drawer>
          </React.Fragment>
        }
      </div>
    </>
  );
}
