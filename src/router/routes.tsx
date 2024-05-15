import { RouteObject } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import MagicCards from "../pages/MagicCards";
import { PathConstants } from "./pathConstants";
import Collection from "../pages/Collection";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: PathConstants.HOME,
        element: <MagicCards />,
      },
      {
        path: PathConstants.COLLECTION_ID,
        element: <Collection />,
      },
    ],
  },
];
