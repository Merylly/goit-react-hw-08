import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBar from "../../components/SearcBar/SearchBar";
import ContactList from "../../components/ContactList/ContactList";

import css from './ContactsPage.module.css'

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={css.wrapper}>
        <ContactForm />
        <SearchBar />
      </div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
