// import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Signin = () => {
  return (
    <div className="outerDiv">
      <div className="signin">
        <div className="signin-box">
          <label className="label">Sign In</label>
        </div>
        <div className="signin-box">
          <TextField
            type="email"
            label="Email"
            id="filled-size-small"
            variant="filled"
            size="small"
          />
          <TextField
            type="password"
            label="Password"
            id="filled-size-small"
            variant="filled"
            size="small"
          />
          <div>
            <Button
              variant="contained"
              onClick={() => {
                confirm("Are You Sure ?");
              }}
            >
              Cancle
            </Button>
            <Button
              style={{ marginLeft: "35px" }}
              variant="contained"
              onClick={() => {
                confirm("Press Ok to Sign-in.");
              }}
            >
              Sign In
            </Button>
          </div>
          <div>
            <h4 className="h4tag">Create An Account?</h4>
            <h4>
              <Link to="/signup">Sign-Up</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
