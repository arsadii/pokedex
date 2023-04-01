import { createBrowserRouter } from "react-router-dom";
import Landing from "src/pages/Landing/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

export default router;
