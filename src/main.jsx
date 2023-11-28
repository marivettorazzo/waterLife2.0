import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Home from "../src/pages/Home.jsx";
import Loja from "../src/pages/Loja.jsx";

import Sale from "../src/pages/Sale.jsx";
import Sobre from "../src/pages/Sobre.jsx";
import Carrinho from "../src/pages/Carrinho.jsx";
import ErrorPage from "../src/core/errorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "carrinho",
        element: <Carrinho />,
        errorElement: <ErrorPage />,
      },
      {
        path: "loja",
        element: <Loja />,
        errorElement: <ErrorPage />,
      },
      {
        path: "sale",
        element: <Sale />,
        errorElement: <ErrorPage />,
      },
      {
        path: "sobre-water-life",
        element: <Sobre />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={routes} />
  </React.StrictMode>
);
