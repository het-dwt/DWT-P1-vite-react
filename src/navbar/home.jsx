import "./home.css";
import React from "react";
import Clock from "./clock";

const Home = () => {
  return (
    <div className="home">
      <div id="bg-home">
        <div id="clockParent">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default Home;
