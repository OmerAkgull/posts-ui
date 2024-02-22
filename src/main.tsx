import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./routes/layout";
import Users from "./routes/users";
import { loader as userLoader } from "./routes/users";
import UserDetails from "./routes/UserDetails";
import { loader as singleUserLoader } from "./routes/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "users",
        element: <Users></Users>,
        loader: userLoader,
      },
      {
        path: "users/:userId",
        element: <UserDetails/>,
        loader: singleUserLoader,
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
