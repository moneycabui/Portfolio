import React from 'react';
import { IoMailSharp } from 'react-icons/io5';
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import styles from './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <Router>
        <div className={styles.app}>
          <nav className={styles.header}>
            <Link to="/" className={styles.name}>Monica Bui</Link>
            <div className={styles.links}>
              <Link to="/AboutMe" className={styles.aboutMeLink}>About Me</Link>
              <Link to="/Projects" className={styles.projectsLink}>Projects</Link>
              <Link to="/TechSkills" className={styles.techSkillsLink}>Tech Skills</Link>
              <Link to="/Education" className={styles.educationLink}>Education</Link>
              <Link to="/Resume" className={styles.resumeLink}>Resume</Link>
            </div>
            <div className={styles.socialMedia}>
              <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/monicabui/')} size="30" className={styles.liIcon} />
              <FaInstagram onClick={() => window.open('https://www.instagram.com/moneycabui/')} size="30" className={styles.igIcon} />
              <FaFacebook onClick={() => window.open('https://www.facebook.com/moneycabui')} size="30" className={styles.fbIcon} />
              <IoMailSharp onClick={() => window.open('mailto:monicabbui@gmail.com')} size="30" className={styles.emailIcon} />
              <FaGithub onClick={() => window.open('https://github.com/moneycabui')} size="30" className={styles.ghIcon} />
            </div>
          </nav>
        </div>
      </Router>
    )
  }
}

export default App;
