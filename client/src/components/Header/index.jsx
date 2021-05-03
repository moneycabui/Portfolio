import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import styles from './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <nav className={styles.header}>
        <Link to="/">
          {/* <img className={styles.name} src="/images/HeaderName.png" alt="Monica Bui"/> */}
          <img className={styles.headerImage} src="/images/ProfilePhoto.jpg" alt="Monica Bui" />
        </Link>
        <div className={styles.links}>
          <Link to="/" className={styles.homeLink}>Home</Link>
          <Link to="/AboutMe" className={styles.aboutMeLink}>About Me</Link>
          <Link to="/Projects" className={styles.projectsLink}>Projects</Link>
          <Link to="/Resume" className={styles.resumeLink}>Resume</Link>
          <Link to="/Contact" className={styles.contactLink}>Contact</Link>
        </div>
        <div className={styles.socialMedia}>
          <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/monicabui/')} className={styles.liIcon} />
          <IoMailSharp title="Send an email" onClick={() => window.open('mailto:monicabbui@gmail.com')} className={styles.emailIcon} />
          <FaInstagram onClick={() => window.open('https://www.instagram.com/moneycabui/')} className={styles.igIcon} />
          <FaFacebook title="Facebook" onClick={() => window.open('https://www.facebook.com/moneycabui')} className={styles.fbIcon} />
          <FaGithub title="GitHub" onClick={() => window.open('https://github.com/moneycabui')} className={styles.ghIcon} />
          {/* Dark mode toggle */}
          {/* If current page is dark mode have sun icon */}
          {/* If current page is light mode have moon icon */}
        </div>
      </nav>
    )
  }
}

export default Header;