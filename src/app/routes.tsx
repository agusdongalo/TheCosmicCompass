import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Observatory } from "./pages/Observatory";
import { StarMaps } from "./pages/StarMaps";
import { Lab } from "./pages/Lab";
import { AstroNews } from "./pages/AstroNews";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "observatory", Component: Observatory },
      { path: "star-maps", Component: StarMaps },
      { path: "lab", Component: Lab },
      { path: "astro-news", Component: AstroNews },
      { path: "*", Component: NotFound },
    ],
  },
]);
