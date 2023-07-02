import { createBrowserRouter } from "react-router-dom";
import RedirectPageWapper from "./components/RedirectPageWapper";
import Home from "./pages/Home";
import SignPage from "./pages/SignPage";
import UserPage from "./pages/UserPage";

const routerData = [
  {
    path: "/",
    element: <Home />,
    authCheck: false,
  },
  {
    path: "/signin",
    element: <SignPage />,
    authCheck: true,
    requireAuth: false,
    redirectTo: "/user",
  },
  {
    path: "/user",
    element: <UserPage />,
    authCheck: true,
    requireAuth: true,
    redirectTo: "/signin",
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    if (router.authCheck) {
      return {
        path: router.path,
        element: (
          <RedirectPageWapper
            requireAuth={router.requireAuth}
            redirectTo={router.redirectTo}
          >
            {router.element}
          </RedirectPageWapper>
        ),
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  })
);
