import ReactDOM from "react-dom/client";
import App from "./App";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<h1>loading....</h1>}>
    <RouterProvider router={router}></RouterProvider>
  </Suspense>
);
