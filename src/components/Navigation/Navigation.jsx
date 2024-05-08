import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import clsx from "clsx";
import css from './Navigation.module.css'

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navMenu}>
      <NavLink className={getNavLinkClassName} to="/">Home</NavLink>

      {isLoggedIn && <NavLink className={getNavLinkClassName} to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
