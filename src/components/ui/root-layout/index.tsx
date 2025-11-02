import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      nav
      <main>
        <Outlet />
      </main>
    </div>
  );
}
