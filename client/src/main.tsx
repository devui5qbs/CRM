import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./constants/ROUTES.ts";
import AuthPage from "./pages/AuthPage.tsx";

const router = createBrowserRouter(
  [
    {
      path: ROUTES.AUTH,
      element: <AuthPage />,
    },
    {
      path: ROUTES.MAIN,
      element: <App />,
    },
  ],

);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);
