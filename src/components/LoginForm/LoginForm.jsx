import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email address is required!")
    .email("You must enter valid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(2, `Your password must be more than 6 characters!`),
});

const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(login(values));
    actions.resetForm();
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
