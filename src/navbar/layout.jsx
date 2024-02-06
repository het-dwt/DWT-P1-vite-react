import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav className="mainNavbar">
        <h4>
          <Link to="/">Home</Link>
        </h4>
        <h4>
          <Link to="/about">About</Link>
        </h4>
        <h4>
          <Link to="/contact">Contact</Link>
        </h4>
        <h4>
          <Link to="/signup">Signup</Link>
        </h4>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
