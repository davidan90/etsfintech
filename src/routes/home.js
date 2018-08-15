import { Home } from "views";

export const homeRoutes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/etsfintech", // github-pages needed
    redirect: "/home"
  }
];
