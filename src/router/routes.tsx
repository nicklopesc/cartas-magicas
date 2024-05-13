import { RouteObject } from "react-router-dom";
import MagicCards from "../pages/MagicCards";
import { PathConstants } from "./pathConstants";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";



export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: PathConstants.HOME,
        element: <MagicCards />,
      },
      
    ],
  },
];
