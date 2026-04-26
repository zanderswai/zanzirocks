import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/main";
import LandingPage from "@/pages/landing.page";
import NotFoundPage from "@/pages/not-found.page";
import ErrorPage from "@/pages/error.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <LandingPage /> }],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
