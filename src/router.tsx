import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./lib/page/app/dashboard/dashboard";
import { SignIn } from "./lib/page/auth/sign-in";
import { SignUp } from "./lib/page/auth/sign-up";
import { AppLayout } from "./lib/page/_layouts/app";
import { AuthLayout } from "./lib/page/_layouts/auth";
import { Orders } from "./lib/page/app/orders/orders";
import { NotFound } from "./lib/page/404";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {path: '/', element: <Dashboard />},
      {path: '/pedidos', element: <Orders />}
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {path: '/sign-in', element: <SignIn />},
      {path: '/sign-up', element: <SignUp />},
    ],
  }
])