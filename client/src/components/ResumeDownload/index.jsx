import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import styles from './ResumeDownload.css';

const ResumeDownload = () => {
  return (
    <a href="/documents/MonicaBuiResume.pdf" download="Monica Bui Resume">
      <button className={styles.downloadButton}>
        <FaFileDownload
            title="Download Resume PDF"
            className={styles.downloadIcon}
        />
        {'   '}
        Resume PDF Download
      </button>
    </a>
  );
};

export default ResumeDownload;
