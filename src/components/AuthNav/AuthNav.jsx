import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from './AuthNav.module.css'

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={getNavLinkClassName} to="/register">Sign Up</NavLink>
      <NavLink className={getNavLinkClassName} to="/login">Log In</NavLink>
    </div>
  );
}

export default AuthNav