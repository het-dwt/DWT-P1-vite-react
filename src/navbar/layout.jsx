import "./layout.css";
import React from "react";

import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header className="mainNavbar">
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
        {/* <h4 id="navTab">
          <Link to="/clock">clock</Link>
        </h4> */}
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
