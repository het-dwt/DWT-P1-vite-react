import "./layout.css";
import React from "react";
import Clock from "./clock";
import Fade from '@mui/material/Fade';
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Backdrop from '@mui/material/Backdrop';
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from '@mui/material/CircularProgress';

import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
        <div className="mainNavbar">
          <div id="avatar">
            <Stack>
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
            </Stack>
          </div>
          <div id="navbar">
            <h4 id="navTab">
              <Link to="/">Home</Link>
            </h4>
            <h4 id="navTab">
              <Link to="/about">About</Link>
            </h4>
            <h4 id="navTab">
              <Link to="/apiData">Api-Data</Link>
            </h4>
            <h4 id="navTab">
              <Link to="/contact">Contact</Link>
            </h4>
            <h4 id="navTab">
              <Link to="/signup">Login</Link>
            </h4>
          </div>
          <div id="clockParent">
            <Paper elevation={4}>
              <Clock />
            </Paper>
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
