import React from 'react';
import { IoDownloadOutline, IoOpenOutline } from 'react-icons/io5';
import styles from './ResumeIcons.css'

const ResumeIcons = () => {
  return (
    <div className={styles.iconsContainer}>
      <div className={styles.download}>
        <a href="/documents/MonicaBuiResume.pdf" download="Monica Bui Resume" className={styles.download}>
          <IoDownloadOutline
            title="Download Resume PDF"
            className={styles.downloadIcon}
          />
          <small className={styles.download}>Click here to download Resume PDF.</small>
        </a>
      </div>
      <div className={styles.open} onClick={() => window.open('/documents/MonicaBuiResume.pdf')}>
        <IoOpenOutline
          title="View Resume PDF"
          className={styles.openIcon}
        />
        <small>Click here to open Resume PDF.</small>
      </div>
    </div>
  );
}

export default ResumeIcons;