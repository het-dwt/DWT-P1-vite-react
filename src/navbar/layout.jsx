import "./layout.css";
import React from "react";
import Clock from "./clock";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
        <div className="mainNavbar">
          <div id="avatar">
            <Stack>
              <Avatar sx={{ bgcolor: "#3B9932" }}>DW</Avatar>
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
