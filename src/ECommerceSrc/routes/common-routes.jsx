import { createBrowserRouter } from "react-router-dom";

import Header from "../header/header";
import ECommerceApp from "../App/ECommerce";
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
        path: "",
        element: <Header />,
      },
    ],
  },
]);
export default router;