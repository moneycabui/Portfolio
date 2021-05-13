import React from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import styles from './Modal.css'

const Modal = ({ imageDisplayed, closeModal }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <RiCloseCircleFill className={styles.closeButton} onClick={closeModal} />
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
