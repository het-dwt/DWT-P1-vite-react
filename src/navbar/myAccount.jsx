import React from "react";
import "./myAccount.css"
import Paper from "@mui/material/Paper";


const Account = ()=>{
    return (
        <div className="account-outerDiv">
            <div className="account">
            <Paper elevation={2}>
              <h4>This is My Account Component.</h4>
            </Paper>
            </div>
        </div>
    )
}
export default Account;