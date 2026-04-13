import Navigation from "./Navigation";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navigation />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
