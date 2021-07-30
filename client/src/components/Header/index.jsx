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
      <NavLink to="/">
        <img className={styles.headerImage} src="/images/ProfilePhoto.jpg" alt="Monica Bui" />
      </NavLink>
      <div className={styles.links}>
        <NavLink to="/" className={styles.homeLink}>Home</NavLink>
        <NavLink to="/AboutMe" className={styles.aboutMeLink}>About Me</NavLink>
        <NavLink to="/Projects" className={styles.projectsLink}>Projects</NavLink>
        <NavLink to="/Resume" className={styles.resumeLink}>Resume</NavLink>
        <NavLink to="/Contact" className={styles.contactLink}>Contact</NavLink>
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