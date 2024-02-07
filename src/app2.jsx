import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./navbar/layout";
import About from "./navbar/about";
import Contact from "./navbar/contact";
import Home from "./navbar/home";
import Signup from "./navbar/signup";
import Signin from "./navbar/signin";
import "./App2.css";
import Apidata from "./navbar/apiData";


export default function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="layout" element={<Layout />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="apiData" element={<Apidata />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
