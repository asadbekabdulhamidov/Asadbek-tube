import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layout

import MainLayout from "../layouts/MainLayout";

//pages
import { HomePage, ChannelPage, Search, VideoDetail } from "../pages";

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
        {
          path: "channelPage/:id?",
          element: <ChannelPage />,
        },
        {
          path: "search/:id?",
          element: <Search />,
        },
        {
          path: "videoDetail/:id?",
          element: <VideoDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Root;
