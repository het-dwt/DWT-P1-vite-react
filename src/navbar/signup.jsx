import React from "react";
import "./signup.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, Outlet } from "react-router-dom";

const Signup = () => {
  return (
    <div className="outerDiv">
      <div className="signup">
        <div className="signup-box">
          <br />
          <label className="label">Sign Up</label>
          <br />
          <TextField
            style={{ marginTop: "20px" }}
            label="First Name"
            id="filled-size-small"
            variant="filled"
            size="small"
          />
          <br />

          <TextField
            style={{ marginTop: "20px" }}
            label="Last Name"
            id="filled-size-small"
            variant="filled"
            size="small"
          />
          <br />

          <TextField
            style={{ marginTop: "20px" }}
            type="email"
            label="Email"
            id="filled-size-small"
            variant="filled"
            size="small"
          />
          <br />

          <TextField
            style={{ marginTop: "20px" }}
            type="password"
            label="Password"
            id="filled-size-small"
            variant="filled"
            size="small"
          />
          <br />

          <TextField
            style={{ marginTop: "20px" }}
            type="password"
            label="Confirm Password"
            id="filled-size-small"
            variant="filled"
            size="small"
          />
          <br />
          <div style={{ marginTop: "20px" }}>
            <Button variant="contained">Cancle</Button>
            <Button style={{ marginLeft: "35px" }} variant="contained">
              Sign Up
            </Button>
          </div>
          <div>
            <h4 className="h4tag">Already Have An Account?</h4>
            <h4>
              <Link to="/signin">Sign-In</Link>
            </h4>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
