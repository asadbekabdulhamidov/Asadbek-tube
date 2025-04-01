import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layout

import MainLayout from "../layouts/MainLayout";

//pages
import { HomePage } from "../pages";

const Root = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Root;
