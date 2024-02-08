import "./home.css";
import React from "react";
import Clock from "./clock";
import Paper from "@mui/material/Paper";

const Home = () => {
  return (
    <div className="home">
      <div id="bg-home">
        <div id="clockParent">
          <Paper elevation={4}>
            <Clock />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Home;
