import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PendingTodoItem from "../src/pages/PendingTodoItem";

//SETTING UP THE ROUTING

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/pending_task",
    element: <PendingTodoItem></PendingTodoItem>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
