import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { login } from "../../redux/auth/operations";

import css from "./LoginForm.module.css";

const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email address is required!")
    .email("You must enter valid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, `Password must be more than 7.`),
});

const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast("Wecome back.", {
          style: {
            padding: "16px",
            color: "#e7b038",
            backgroundColor: "rgba(59, 84, 90, 0.3)",
            fontSize: "18px",
          },
        });
        actions.resetForm();
      })
      .catch(() => {
        toast("Wrong email or password.", {
          style: {
            padding: "16px",
            color: "#e7b038",
            backgroundColor: "rgba(59, 84, 90, 0.3)",
            fontSize: "18px",
          },
        });
      });
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={loginUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.formItem}>
          <p className={css.formTitle}>Email</p>
          <Field
            className={css.formInput}
            type="email"
            name="email"
            placeholder="user@gmail.com"
          />
          <ErrorMessage className={css.error} component="span" name="email" />
        </label>

        <label className={css.formItem}>
          <p className={css.formTitle}>Password</p>
          <Field
            className={css.formInput}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage
            className={css.error}
            component="span"
            name="password"
          />
        </label>
        
        <button className={css.formButton} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
