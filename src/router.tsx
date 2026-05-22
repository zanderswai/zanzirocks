import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/main";
import LandingPage from "@/sections/pages/landing.page";
import NotFoundPage from "@/sections/pages/not-found.page";
import ErrorPage from "@/sections/pages/error.page";
import AboutPage from "@/sections/pages/about/page";
import DestinationsPage from "@/sections/pages/destinations.page";
import PackagesPage from "@/sections/pages/packages.page";
import MafiaWhaleSharkPage from "@/sections/pages/packages/mafia-island-whale-shark-adventure-day-trip.page";
import NorthernCircuitPage from "@/sections/pages/packages/northern-circuit-4-days-tarangire-serengeti-ngorongoro.page";
import NyerereFlySafariPage from "@/sections/pages/packages/nyerere-fly-in-safari-3-days.page";
import SerengetiNgorongoroPage from "@/sections/pages/packages/serengeti-ngorongoro-safari-3-days.page";
import GrandSafariPage from "@/sections/pages/packages/grand-safari-zanzibar-6-days.page";
import ZanzibarPage from "@/sections/pages/destinations/zanzibar.page";
import NyererePage from "@/sections/pages/destinations/nyerere.page";
import MafiaPage from "@/sections/pages/destinations/mafia.page";
import NgorongoroPage from "@/sections/pages/destinations/ngorongoro.page";
import SerengetiPage from "@/sections/pages/destinations/serengeti.page";
import TarangirePage from "@/sections/pages/destinations/tarangire.page";
import ContactPage from "@/sections/pages/contact/page";
import BlogPage from "@/sections/pages/blog.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "destinations", element: <DestinationsPage /> },
      { path: "packages", element: <PackagesPage /> },
      { path: "packages/mafia-island-whale-shark-adventure-day-trip", element: <MafiaWhaleSharkPage /> },
      { path: "packages/northern-circuit-4-days-tarangire-serengeti-ngorongoro", element: <NorthernCircuitPage /> },
      { path: "packages/nyerere-fly-in-safari-3-days", element: <NyerereFlySafariPage /> },
      { path: "packages/serengeti-ngorongoro-safari-3-days", element: <SerengetiNgorongoroPage /> },
      { path: "packages/grand-safari-zanzibar-6-days", element: <GrandSafariPage /> },
      { path: "destinations/zanzibar", element: <ZanzibarPage /> },
      { path: "destinations/nyerere", element: <NyererePage /> },
      { path: "destinations/mafia", element: <MafiaPage /> },
      { path: "destinations/ngorongoro", element: <NgorongoroPage /> },
      { path: "destinations/serengeti", element: <SerengetiPage /> },
      { path: "destinations/tarangire", element: <TarangirePage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "blog", element: <BlogPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
