import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsError, selectIsLoading } from "../../redux/auth/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBar from "../../components/SearcBar/SearchBar";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <div className={css.wrapper}>
        <div>
          <ContactForm />
          <SearchBar />
        </div>
        <ContactList />
      </div>
    </>
  );
};

export default ContactsPage;
