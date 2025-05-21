import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../page/LoginPage";

import ResponsivePage from "../page/ResponsivePage";
import HomePage from "../page/HomePage";

const mainRoute = createBrowserRouter([
  {
    path: "*",
    element: <div>ไม่พบหน้าที่ต้องการ</div>,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  // {
  //   path: "/homePage",
  //   element: <HomePage />,
  // },
  {
    path: "/responsivePage",
    element: <ResponsivePage />,
  },
]);

export default mainRoute;
