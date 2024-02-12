import "./layout.css";
import React from "react";
import Clock from "./clock";
import AvatarMenu from "./avatarMenu";
import Paper from "@mui/material/Paper";
//----------------------------------------
// import HomeIcon from "@mui/icons-material/Home";
// import LoginIcon from "@mui/icons-material/Login";
// import CallIcon from "@mui/icons-material/Call";
// import StorageIcon from "@mui/icons-material/Storage";
//-----------------------------------------
// import Fade from "@mui/material/Fade";
// import Stack from "@mui/material/Stack";
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
// import FadeMenu, {Fademenu} from "./drawer";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Backdrop from "@mui/material/Backdrop";
// import Button from "@mui/material/Button";
// import CircularProgress from "@mui/material/CircularProgress";

import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
        <div className="mainNavbar">
          <div id="clockParent">
            <Paper elevation={4}>
              <Clock />
            </Paper>
          </div>
          <div id="navbar">
            <h4 id="navTab">
              {/* <HomeIcon />
              &nbsp; */}
              <Link to="/"> Home</Link>
            </h4>
            <h4 id="navTab">
              <Link to="/about">About</Link>
            </h4>
            <h4 id="navTab">
              {/* <StorageIcon />
              &nbsp; */}
              <Link to="/apiData">Api-Data</Link>
            </h4>
            <h4 id="navTab">
              {/* <CallIcon />
              &nbsp; */}
              <Link to="/contact">Contact</Link>
            </h4>
            <h4 id="navTab">
              {/* <LoginIcon />
              &nbsp; */}
              <Link to="/signup">Login</Link>
            </h4>
          </div>
          <div id="avatar">
            {/* <Stack>
              <Tooltip
                title="Het Gajjar"
                placement="right"
                arrow
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 500 }}
              >
                <Avatar sx={{ bgcolor: "#3B9932" }} variant="rounded">
                  HG
                </Avatar>
              </Tooltip>
            </Stack> */}

            <AvatarMenu />
          </div>
        </div>
      </header>
      <Outlet />
      <footer>
        <div className="footer-main">
          <h4>----This is footer Area----</h4>
        </div>
      </footer>
    </>
  );
};
export default Layout;
