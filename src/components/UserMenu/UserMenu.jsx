import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/auth/operations";
import { selectUserData } from "../../redux/auth/selectors";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserData);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <h2 className={css.userWelcome}>Welcome, {userName.name}♥</h2>
      <button className={css.btnLogout} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
