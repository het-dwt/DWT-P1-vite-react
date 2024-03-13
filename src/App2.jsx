import "./App2.css";
import Home from "./navbar/home";
import About from "./navbar/about";
import Layout from "./navbar/layout";
import Signup from "./navbar/signup";
import Signin from "./navbar/signin";
import Contact from "./navbar/contact";
import Apidata from "./navbar/apiData";
import Profile from "./navbar/myprofile";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clock from "./utilities/clock";
import Setting from "./utilities/setting";
import AvatarMenu from "./utilities/avatarMenu";

export default function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="clock" element={<Clock />} />
          <Route path="layout" element={<Layout />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="apiData" element={<Apidata />} />
          <Route path="contact" element={<Contact />} />
          <Route path="setting" element={<Setting />} />
          <Route path="myprofile" element={<Profile />} />
          <Route path="avatarMenu" element={<AvatarMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
