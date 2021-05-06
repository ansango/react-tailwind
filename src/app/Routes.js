import { lazy } from "react";

const Routes = [
  {
    name: "home",
    path: "/",
    component: lazy(() => import("./views/Home")),
  },
  {
    name: "404",
    path: "*",
    component: lazy(() => import("./views/NotFound")),
  },
];

export default Routes;
