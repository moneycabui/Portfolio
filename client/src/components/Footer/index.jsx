import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import styles from './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div>
      <div className={styles.emailFooter}>
        <Link title="Contact Page" to="/Contact" className={styles.link}>• </Link>
        <Link title="Email" to="/Contact" className={styles.emailLink}>Email: monicabbui@gmail.com</Link>
        {/* <span onClick={() => window.open('mailto:monicabbui@gmail.com')}>Email: monicabbui@gmail.com</span> */}
        <Link title="Contact Page" to="/Contact" className={styles.link}> •••••••</Link>
      </div>
      <div className={styles.socialMediaContainer}>
        <FaLinkedinIn
          title="LinkedIn"
          onClick={() => window.open('https://www.linkedin.com/in/monicabui/')}
          className={styles.liIcon}
        />
        <IoMailSharp
          title="Send me an email at monicabbui@gmail.com"
          onClick={() => window.open('mailto:monicabbui@gmail.com')}
          className={styles.emailIcon}
        />
        <FaInstagram
          title="Instagram: @moneycabui"
          onClick={() => window.open('https://www.instagram.com/moneycabui/')}
          className={styles.igIcon}
        />
        <FaFacebook
          onClick={() => window.open('https://www.facebook.com/moneycabui')}
          className={styles.fbIcon}
        />
        <FaGithub
          title="GitHub"
          onClick={() => window.open('https://github.com/moneycabui')}
          className={styles.ghIcon}
        />
        <Link title="Contact Page" to="/Contact" className={styles.link}> •••••••••••••••</Link>
      </div>
    </div>
  );
}

export default Footer;