import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <hr />
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
