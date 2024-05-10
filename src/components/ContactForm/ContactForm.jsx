import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { addContact } from "../../redux/contacts/operations";

import css from "./ContactForm.module.css";

const contactsSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required!")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .required("This field is required!")
    .matches(/^[0-9]+$/, "Numbers only!")
    .min(3, "Too short!")
    .max(50, "Too long!"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  const onAddContact = (formData) => {
    const finalContactCard = {
      ...formData,
    };

    dispatch(addContact(finalContactCard));
    toast("New contact successfully added.", {
      style: {
        padding: "16px",
        color: "#e7b038",
        backgroundColor: "rgba(59, 84, 90, 0.3)",
        fontSize: "18px",
      },
    });
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={contactsSchema}
      onSubmit={onHandleSubmit}
    >
      <Form className={css.form}>
        <label className={css.formItem}>
          <p className={css.formTitle}>Name</p>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Mary Bayers"
          />
          <ErrorMessage className={css.error} component="p" name="name" />
        </label>

        <label className={css.formItem}>
          <p className={css.formTitle}>Number</p>
          <Field
            className={css.formInput}
            type="text"
            name="number"
            placeholder="655-17-79"
          />
          <ErrorMessage className={css.error} component="p" name="number" />
        </label>

        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
