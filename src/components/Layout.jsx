import Navigation from "./Navigation";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useUserContext } from "../hooks/contextHooks";

const Layout = () => {
  const { handleAutoLogin } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, [handleAutoLogin]);

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
