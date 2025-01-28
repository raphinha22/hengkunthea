import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./components/Home";
import "./App.css";
import MotoKind from "./components/MotoKind";
import Action from "./components/Action";
import Info from "./components/Info";
const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layouts />,
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "kind",
          element: <MotoKind />,
        },
        {
          path: "action",
          element: <Action />,
        },
        {
          path: "location",
          element: <Info />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
