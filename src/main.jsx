import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import App2 from "./app2";
// import ECommerceApp from "./ECommerceSrc/App/ECommerce.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App2 />
      {/* <ECommerceApp /> */}
    </StyledEngineProvider>
  </React.StrictMode>
);
