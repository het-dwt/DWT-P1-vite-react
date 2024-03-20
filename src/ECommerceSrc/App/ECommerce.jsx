import "./ECommerceApp.css";
// import NavTabs from "../body/body";
import logo from "../header/logo/react.svg";
import UserAccount from "../header/userAcc/user-acc";
import LabTabs from "../body/body";

function ECommerceApp() {
  return (
    <div className="App">
      <div className="nav-wrapper" style={{ color: "black" }}>
        <div className="content-logo-text">
          <img src={logo} className="content-logo" alt="logo" />
          <div className="content-text">React</div>
        </div>
        <body className="content-navtab">
          <LabTabs />
        </body>
        <div className="content-useracc">
          <UserAccount />
        </div>
      </div>

      <footer className="App-footer"></footer>
    </div>
  );
}

export default ECommerceApp;
