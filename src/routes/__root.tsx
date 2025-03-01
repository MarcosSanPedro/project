import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../lib/components/Navbar";
import FloatingWhatsApp from "../lib/components/FloatingWhatsApp";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />
      <Outlet />
    </>
  );
}
