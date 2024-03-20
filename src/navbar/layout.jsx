import "./layout.css";
import Cart from "../utilities/cart";
import Clock from "../utilities/clock";
import Paper from "@mui/material/Paper";
import AvatarMenu from "../utilities/avatarMenu";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
        <div className="mainNavbar">
          <div id="clockPaperParent">
            <Paper elevation={4} square>
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
              <Link to="/apiData">Shop</Link>
            </h4>
            <h4 id="navTab">
              <Link to="/contact">Contact</Link>
            </h4>
            <h4 id="navTab">
              <Link to="/signup">Login</Link>
            </h4>
          </div>
          <div id="nav-right">
            <Cart />
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
