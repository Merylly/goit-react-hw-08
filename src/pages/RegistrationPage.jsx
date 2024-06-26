import { useSelector } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { selectIsLoading } from "../redux/auth/selectors";
import Loader from "../components/Loader/Loader";

const RegistrationPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
