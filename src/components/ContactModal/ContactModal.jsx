import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa6";

import Modal from "react-modal";

import css from "./ContactModal.module.css";

Modal.setAppElement("#root");

const ContactModal = ({ name, isModalOpen, closeModal, onDeleteContact }) => {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
    >
      <h2 className={css.title}>Are you sure you want to delete {name}?</h2>

      <div className={css.wrapper}>
        <button className={css.button} type="button" onClick={onDeleteContact}>
          <FaRegThumbsUp color="#2b3b39" size="30px" className={css.icon} />
        </button>

        <button className={css.button} type="button" onClick={closeModal}>
          <FaRegThumbsDown color="#2b3b39" size="30px" className={css.icon} />
        </button>
      </div>
    </Modal>
  );
};

export default ContactModal;
