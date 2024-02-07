import React from "react";
import "./signin.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Signin = () => {
  return (
    <div>
      <div className="signin">
        <div className="signin-box">
          <br />
          <label className="label">Sign In</label>
          <br />
          {/* <br /> */}

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

          <div style={{ marginTop: "20px" }}>
            <Button variant="contained">Cancle</Button>
            <Button style={{ marginLeft: "35px" }} variant="contained">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
