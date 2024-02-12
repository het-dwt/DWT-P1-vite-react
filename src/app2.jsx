import "./App2.css";
import Home from "./navbar/home";
import Clock from "./navbar/clock";
import About from "./navbar/about";
import Layout from "./navbar/layout";
import Signup from "./navbar/signup";
import Signin from "./navbar/signin";
import Contact from "./navbar/contact";
import Apidata from "./navbar/apiData";
import Profile from "./navbar/myprofile";
import Account from "./navbar/myAccount";
import AvatarMenu from "./navbar/avatarMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="myAccount" element={<Account />} />
          <Route path="myprofile" element={<Profile />} />
          <Route path="avatarMenu" element={<AvatarMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
