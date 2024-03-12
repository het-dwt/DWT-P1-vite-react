import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import App2 from "./App2.jsx";
// import "./index.css";
// import Profile from "./navbar/myprofile.jsx";
import { StyledEngineProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <App /> */}
      <App2 />
      {/* <Profile /> */}
    </StyledEngineProvider>
  </React.StrictMode>
);
