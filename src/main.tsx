import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import CreateTrip from "./pages/CreateTrip.tsx";
import Home from "./pages/Home.tsx";
import TripDetails from "./pages/TripDetails.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "create-trip", Component: CreateTrip },
      {path:"trip-details",Component:TripDetails}
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
