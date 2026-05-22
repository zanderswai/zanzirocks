import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/main";
import LandingPage from "@/sections/pages/landing.page";
import NotFoundPage from "@/sections/pages/not-found.page";
import ErrorPage from "@/sections/pages/error.page";
import ZanzibarPage from "@/sections/pages/destinations/zanzibar.page";
import NyererePage from "@/sections/pages/destinations/nyerere.page";
import MafiaPage from "@/sections/pages/destinations/mafia.page";
import NgorongoroPage from "@/sections/pages/destinations/ngorongoro.page";
import SerengetiPage from "@/sections/pages/destinations/serengeti.page";
import TarangirePage from "@/sections/pages/destinations/tarangire.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "destinations/zanzibar", element: <ZanzibarPage /> },
      { path: "destinations/nyerere", element: <NyererePage /> },
      { path: "destinations/mafia", element: <MafiaPage /> },
      { path: "destinations/ngorongoro", element: <NgorongoroPage /> },
      { path: "destinations/serengeti", element: <SerengetiPage /> },
      { path: "destinations/tarangire", element: <TarangirePage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
