import App from './App'
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./erroPage";
import AboutMe from "./pages/aboutMe";
import Projetos from "./pages/project";
import Contato from "./pages/contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
    ],
  },
  {
    path: "/flaviaPinheiro/contato",
    element: <Contato/>
  },
  {
    path: "/flaviaPinheiro/aboutMe",
    element: <AboutMe/>,
  },
  {
    path: "/flaviaPinheiro/project",
    element: <Projetos/>,
  },
  {
    path:"/flaviaPinheiro",
    element:<App/>  
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);