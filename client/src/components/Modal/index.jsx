import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import styles from './Modal.css'

const Modal = ({ imageDisplayed, closeModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBackground} onClick={closeModal}></div>
      <IoCloseSharp className={styles.closeButton} onClick={closeModal} />
      <img
        className={styles.modalImage}
        src={imageDisplayed[0]}
        alt={imageDisplayed[1]}
      />
    </div>
  );
}

export default Modal;
