import React from 'react';
import { IoDownloadOutline, IoOpenOutline } from 'react-icons/io5';
import styles from './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ closeModal, displayModal }) => {
  let clickOption;
  if (displayModal === true) {
    clickOption = closeModal;
  }
  return (
    <nav className={styles.header} id="header" onClick={clickOption}>
      <Link to="/">
        <img className={styles.headerImage} src="/images/ProfilePhoto.jpg" alt="Monica Bui" />
      </Link>
      <div className={styles.links}>
        <Link to="/" className={styles.homeLink}>Home</Link>
        <Link to="/AboutMe" className={styles.aboutMeLink}>About Me</Link>
        <Link to="/Projects" className={styles.projectsLink}>Projects</Link>
        <Link to="/Resume" className={styles.resumeLink}>Resume</Link>
        <Link to="/Contact" className={styles.contactLink}>Contact</Link>
      </div>
      <div className={styles.iconContainer}>
        <a href="/documents/MonicaBuiResume.pdf" download="Monica Bui Resume" className={styles.download}>
          <IoDownloadOutline
            title="Download Resume PDF"
            className={styles.downloadIcon}
          />
        </a>
        <IoOpenOutline
          title="View Resume PDF"
          onClick={() => window.open('/documents/MonicaBuiResume.pdf')}
          className={styles.resumeIcon}
        />
        {/* Future Implementation: Dark mode toggle */}
      </div>
    </nav>
  )
}

export default Header;