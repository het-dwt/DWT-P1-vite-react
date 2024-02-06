import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App3.css";
import Layout from "./navbar/layout";
import Home from "./navbar/home";
import About from "./navbar/about";
import Contact from "./navbar/contact";
import Signup from "./navbar/signup";

function App3() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="layout" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App3;
