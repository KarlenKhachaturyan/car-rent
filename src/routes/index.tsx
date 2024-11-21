import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import RootLayout from "../components/layout/RootLayout";
import Search from "../pages/Search";
import Info from "../pages/Info";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: "about", element: <About /> },
      { path: "search", element: <Search /> },
      { path: "info/:id", element: <Info /> },
    ],
  },
]);

export default router;
