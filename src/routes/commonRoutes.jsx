import { createBrowserRouter } from "react-router-dom";
import Layout from "../navbar/layout";
import Home from "../navbar/home";
import About from "../navbar/about";
import Apidata from "../navbar/apiData";
import Contact from "../navbar/contact";
import Signup from "../navbar/signup";
import Profile from "../navbar/myprofile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
      },
      {
        path: "/home",
        element: Home,
      },
      {
        path: "/about",
        element: About,
      },
      {
        path: "/apiData",
        element: Apidata,
      },
      {
        path: "/contact",
        element: Contact,
      },
      {
        path: "/login",
        element: Signup,
      },
      {
        path:"/myProfile",
        element:Profile,
      }
    ],
  },
]);
export default router;
