import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.wrapper}>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
