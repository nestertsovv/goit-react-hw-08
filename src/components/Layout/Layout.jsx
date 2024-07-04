import { Outlet } from "react-router-dom";

import { AppBar } from "components";

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
