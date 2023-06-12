import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { routers } from "./router";
import { AuthProvider } from "./context/AuthContext";

const routerObject = createBrowserRouter(routers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routerObject} />
    </AuthProvider>
  </React.StrictMode>
);
