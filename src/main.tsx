import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./domain/User";
import Register from "./pages/Register";
import QuatroZeroQuatro from "./routes/errorPages";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Dashboard from "./pages/dasboard/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <QuatroZeroQuatro />,
    children: [
      {
        path: "/ArtisticSight",
        element: <User />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
