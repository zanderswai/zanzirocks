import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/main";
import LandingPage from "@/pages/landing.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <LandingPage /> }],
  },
]);

export default router;
