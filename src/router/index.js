import React from "react";
import { Navigate } from "react-router-dom";

const Login = React.lazy(() => import("@/view/login"));
const Dashboard = React.lazy(() => import("@/view/dashboard"));
const Home = React.lazy(() => import("@/view/dashboard/comps/home"));
const Search = React.lazy(() => import("@/view/dashboard/comps/search"));
const Playlist = React.lazy(() => import("@/view/dashboard/comps/playlist"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/dashboard"></Navigate>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/",
        element: <Navigate to="/dashboard/home" />,
      },
      {
        path: "/dashboard/home",
        element: <Home />,
      },
      {
        path: "/dashboard/search",
        element: <Search />,
      },
      {
        path: "/dashboard/playlist/:id",
        element: <Playlist />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
