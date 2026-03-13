import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { StarfieldBackground } from "./StarfieldBackground";

export function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070d] isolate">
      <StarfieldBackground />

      <div className="relative z-10">
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
