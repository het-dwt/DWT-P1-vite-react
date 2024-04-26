import "./ECommerceApp.css";
import logo from "../header/logo/react.svg";
import UserAccount from "../header/userAcc/user-acc";
import LabTabs from "../body/body";
import { Grid } from "@mui/material";

function ECommerceApp() {
  return (
    <div className="App">
      <Grid container className="nav-wrapper" style={{ color: "black" }}>
        <Grid xs={4} md={4} lg={4} className="content-logo-text">
          <img src={logo} className="content-logo" alt="logo" />
          <div className="content-text">React</div>
        </Grid>
        <Grid xs={4} md={4} lg={4} className="content-navtab">
         APP
        </Grid>
        <Grid xs={4} md={4} lg={4} className="content-useracc">
          <UserAccount />
        </Grid>
      </Grid>
      <body className="content-data-wrapper">
        <Grid container className="content-data">
          <Grid xs={12} md={12} lg={12}>
            <LabTabs />
          </Grid>
        </Grid>
      </body>

      <footer className="App-footer"></footer>
    </div>
  );
}

export default ECommerceApp;
