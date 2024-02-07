import React from "react";
import "./signin.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Signin = () => {
  return (
    //     <>
    //       <div className="signin">
    //         <div className="signin-box">
    //           <h1 className="label">Sign In</h1>
    //           <TextField
    //             style={{ marginTop: "20px" }}
    //             type="email"
    //             label="Email"
    //             id="filled-size-small"
    //             variant="filled"
    //             size="small"
    //           />
    //           <TextField
    //             style={{ marginTop: "20px" }}
    //             type="password"
    //             label="Password"
    //             id="filled-size-small"
    //             variant="filled"
    //             size="small"
    //           />
    //         </div>

    //         <div style={{ marginTop: "20px" }}>
    //           <Button variant="contained">Cancle</Button>
    //           <Button style={{ marginLeft: "35px" }} variant="contained">
    //             Sign In
    //           </Button>
    //         </div>
    //       </div>
    //     </>
    <div className="outerDiv">
      <div className="signin">
        <div className="signin-box">
          <span>Sign In</span>
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
