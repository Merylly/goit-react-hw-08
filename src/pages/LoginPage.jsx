import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import { selectIsLoading } from "../redux/auth/selectors";
import Loader from "../components/Loader/Loader";

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      {isLoading && <Loader />}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
