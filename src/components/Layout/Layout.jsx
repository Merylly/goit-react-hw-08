import AppBar from "../AppBar/AppBar";

import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.mainContainer}>
      <div className={css.container}>
        <header>
          <AppBar />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
