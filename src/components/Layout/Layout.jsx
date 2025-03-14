import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <AppBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
