import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/main";
import LandingPage from "@/sections/pages/landing.page";
import NotFoundPage from "@/sections/pages/not-found.page";
import ErrorPage from "@/sections/pages/error.page";
import ZanzibarPage from "@/sections/pages/destinations/zanzibar.page";
import NyererePage from "@/sections/pages/destinations/nyerere.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "destinations/zanzibar", element: <ZanzibarPage /> },
      { path: "destinations/nyerere", element: <NyererePage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
