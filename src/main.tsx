import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./routes/layout";
import Homepage from "./routes/homepage";
import { loader as userLoader } from "./routes/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index:true,
        element: <Homepage></Homepage>,
        loader: userLoader,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
