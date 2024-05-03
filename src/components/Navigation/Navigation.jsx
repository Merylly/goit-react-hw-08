import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>

        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
    </div>
  );
};

export default Navigation;
