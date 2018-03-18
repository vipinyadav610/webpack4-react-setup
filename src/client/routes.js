import Home from "./components/Home";
import NotFound from "./components/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
