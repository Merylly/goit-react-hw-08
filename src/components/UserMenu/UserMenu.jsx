import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();

  const HandleClick = () => {
    dispatch(logout());
  };
  
  return (
    <div>
      <h2>Welcome, </h2>
      <button type="button" onClick={HandleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
