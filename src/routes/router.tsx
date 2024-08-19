import Layout from "@/components/layout";
import SignIn from "@/pages/auth/signin";
import SignUp from "@/pages/auth/signup";
import Dashboard from "@/pages/dashboard/dashboard";
import ErrorPage from "@/pages/exceptions/error-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
