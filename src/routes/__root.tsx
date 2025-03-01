import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
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
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
