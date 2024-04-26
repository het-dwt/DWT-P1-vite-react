import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
// import Todo from "./utilities/todo2";
// import App2 from "./App2";
// import TodoList from "./utilities/todo";
// import Shop from "./ECommerceSrc/body/shop/shop.jsx";
import ECommerceApp from "./ECommerceSrc/App/ECommerce.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <Todo /> */}
      {/* <App2 /> */}
      {/* <Shop /> */}
      {/* <TodoList /> */}
      <ECommerceApp />
    </StyledEngineProvider>
  </React.StrictMode>
);
