import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "./App2.jsx";
// import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App2 />
    </StyledEngineProvider>
  </React.StrictMode>
);
