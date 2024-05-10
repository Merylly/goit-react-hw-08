import { BiSolidUser, BiSolidPhone } from "react-icons/bi";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";

import { deleteContact } from "../../redux/contacts/operations";
import ContactModal from "../ContactModal/ContactModal";

import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDeleteContact = () => {
    setIsModalOpen(false);
    dispatch(deleteContact(contact.id));
    toast("Contact successfully deleted.", {
      style: {
        padding: "16px",
        color: "#e7b038",
        backgroundColor: "rgba(59, 84, 90, 0.3)",
        fontSize: "18px",
      },
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className={css.contactItem}>
      <div className={css.contactWrap}>
        <div className={css.contactWrapper}>
          <BiSolidUser size="25" color="#2b3b39" />
          <p className={css.contactText}>{contact.name}</p>
        </div>

        <div className={css.contactWrapper}>
          <BiSolidPhone size="25" color="#2b3b39" />
          <p className={css.contactText}>{contact.number}</p>
        </div>
      </div>

      <button className={css.deleteButton} type="button" onClick={openModal}>
        Delete
      </button>

      <ContactModal
        name={contact.name}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onDeleteContact={onDeleteContact}
      />
    </li>
  );
};

export default Contact;
