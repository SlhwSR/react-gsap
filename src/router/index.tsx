import { createHashRouter } from "react-router-dom";
import { lazy, createRef } from "react";
import App from "../App";
const ScrollDown = lazy(() => import("@/pages/scroll"));
export const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <ScrollDown />, //视差滚动效果
      },
      //   {
      //     path: "/",
      //     element: <Home></Home>,
      //   },
    ],
  },
  {
    path: "/scrollDown",
    element: <ScrollDown />,
  },

  {
    path: "*",
    element: <h1>404 NotFound</h1>,
  },
]);
