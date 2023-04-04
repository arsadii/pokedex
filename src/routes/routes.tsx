import { createBrowserRouter } from "react-router-dom";
import Landing from "src/pages/Landing/Landing";
import PokemonDetail from "src/pages/PokemonDetail";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "detail/:key",
        element: <PokemonDetail />,
      },
    ],
  },
]);

export default router;
