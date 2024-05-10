import { FiAlertCircle } from "react-icons/fi";

import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.wrapper}>
      <FiAlertCircle size="70" color="#e7b038" />
      <p className={css.text}>The page is not found.</p>
    </div>
  );
};

export default ErrorMessage;
