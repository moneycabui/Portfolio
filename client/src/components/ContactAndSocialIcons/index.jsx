import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import styles from './ContactAndSocialIcons.css';

const ContactAndSocialIcons = (props) => {
  return (
    <div className={styles.iconWrapper}>
      <FaLinkedinIn
        title="linkedin.com/in/monicabui"
        onClick={() => window.open('https://www.linkedin.com/in/monicabui/')}
        className={styles.liIcon}
      />
      <IoMailSharp
        title="Send me an email at monicabbui@gmail.com"
        onClick={() => window.open('mailto:monicabbui@gmail.com')}
        className={styles.emailIcon}
      />
      <FaInstagram
        title="IG: @moneycabui"
        onClick={() => window.open('https://www.instagram.com/moneycabui/')}
        className={styles.igIcon}
      />
      <FaFacebook
        title="facebook.com/moneycabui"
        onClick={() => window.open('https://www.facebook.com/moneycabui')}
        className={styles.fbIcon}
      />
      <FaGithub
        title="GitHub: @moneycabui"
        onClick={() => window.open('https://github.com/moneycabui/Portfolio')}
        className={styles.ghIcon}
      />
    </div>
  )
}

export default ContactAndSocialIcons;
