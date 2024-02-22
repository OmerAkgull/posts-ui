import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./routes/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
