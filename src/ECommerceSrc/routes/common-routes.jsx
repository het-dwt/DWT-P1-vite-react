import { createBrowserRouter } from "react-router-dom";
import ECommerceApp from "../App/ECommerce";
import Contact from "../body/contact/contact";
import About from "../body/about/about";
import Home from "../body/home/home";
import Shop from "../body/shop/shop";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ECommerceApp />,
    children: [
      {
        index: true,
        // element: <Homepage />,
      },

      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);
export default router;
