import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import styles from './Modal.css'

const Modal = ({ imageDisplayed, closeModal }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <IoCloseSharp className={styles.closeButton} onClick={closeModal} />
        <img
          className={styles.modalImage}
          src={imageDisplayed[0]}
          alt={imageDisplayed[1]}
        />
      </div>
    </div>
  );
}

export default Modal;
