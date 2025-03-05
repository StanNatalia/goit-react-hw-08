import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
