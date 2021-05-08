import React from 'react';
import { ImProfile } from 'react-icons/im';
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
        <div className={styles.iconContainer}>
          <ImProfile
            title="View Resume PDF"
            onClick={() => window.open('https://drive.google.com/file/d/1isTzwIon2eTMz--pCZQEDXBBBONKeiuk/view?usp=sharing')}
            className={styles.resumeIcon}
          />
          <a href="/documents/resume/MonicaBuiResume.pdf" download="Monica Bui Resume">
            <ImProfile
              title="Download Resume PDF"
              className={styles.resumeIcon}
            />
          </a>

          {/* Dark mode toggle */}
          {/* If current page is dark mode have sun icon */}
          {/* If current page is light mode have moon icon */}
        </div>
      </nav>
    )
  }
}

export default Header;