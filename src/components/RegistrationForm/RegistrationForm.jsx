import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { register } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

const registerUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .max(30, `Your user name must be less than 30`),
  email: Yup.string()
    .required("Email address is required!")
    .email("You must enter valid email address!"),
  password: Yup.string().required("Password is required!").min(8, `Too short.`),
});

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast("The user successfully added.", {
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
        toast("Invalid user data. Try again.", {
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
      validationSchema={registerUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.formItem}>
          <p className={css.formTitle}>Username</p>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Mary Bayers"
          />
          <ErrorMessage className={css.error} component="span" name="name" />
        </label>

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
          Register new user
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
