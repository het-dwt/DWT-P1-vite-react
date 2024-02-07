import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";
const Layout = () => {
  return (
    <>
      <header>
        <nav className="mainNavbar">
          <h4 id="navTab">
            <Link to="/">Home</Link>
          </h4>
          <h4>
            <Link to="/about">About</Link>
          </h4>
          <h4>
            <Link to="/apiData">Api-Data</Link>
          </h4>
          <h4>
            <Link to="/contact">Contact</Link>
          </h4>
          <h4>
            <Link to="/signup">Sign-Up</Link>
          </h4>
          <h4>
            <Link to="/signin">Sign-In</Link>
          </h4>
        </nav>
      </header><hr/>

      <Outlet /><hr/>
      <footer>
        <div className="footer-main">
          <h4>----This is footer Area----</h4>
        </div>
      </footer>
    </>
  );
};
export default Layout;
