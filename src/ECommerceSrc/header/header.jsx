// import { Outlet } from "react-router-dom";
import "../header/header.css";
import logo from "../header/logo/react.svg";
import UserAccount from "./userAcc/user-acc";


export function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <div className="content" style={{ color: "black" }}>
          <div>
            <img src={logo} className="content-logo" alt="logo" />
          </div>
          <div className="content-name">React</div>
          <div className="content">
            {/* <Outlet /> */}
          </div>
        </div>
        <div className="content">
          <UserAccount />
        </div>
      </div>
    </div>
  );
}
export default Header;
