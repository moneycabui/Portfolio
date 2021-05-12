import React from 'react';
import { CgClose } from 'react-icons/cg';
import styles from './Modal.css'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render () {
    const { imageDisplayed, closeModal } = this.props;

    return (
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <CgClose className={styles.closeButton} onClick={closeModal} />
          <img
            className={styles.modalImage}
            src={imageDisplayed[0]}
            alt={imageDisplayed[1]}
          />
        </div>
      </div>
    );
  }
}

export default Modal;
