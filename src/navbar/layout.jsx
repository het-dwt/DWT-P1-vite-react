import "./layout.css";
import Clock from "./clock";
import AvatarMenu from "./avatarMenu";
import Paper from "@mui/material/Paper";

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
          <div id="avatar">
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
