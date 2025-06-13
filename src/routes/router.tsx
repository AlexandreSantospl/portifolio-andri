import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import FeaturePage from "../pages/FeaturePage";
import Home from "../pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projetos/:slug", element: <FeaturePage /> },
    ],
  },
]);
