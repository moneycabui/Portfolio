import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import styles from './Contact.css';

const Contact = (props) => {
  return (
    <div className={styles.contact}>
      <img src="/images/ContactTitle.png" alt="Contact" className={styles.contactTitle} />
      <div className={styles.iconWrapper}>
        <FaLinkedinIn title="linkedin.com/in/monicabui" onClick={() => window.open('https://www.linkedin.com/in/monicabui/')} className={styles.liIcon} />
        <IoMailSharp title="Send me an email at monicabbui@gmail.com" onClick={() => window.open('mailto:monicabbui@gmail.com')} className={styles.emailIcon} />
        <FaInstagram title="IG: @moneycabui" onClick={() => window.open('https://www.instagram.com/moneycabui/')} className={styles.igIcon} />
        <FaFacebook title="Facebook" onClick={() => window.open('https://www.facebook.com/moneycabui')} className={styles.fbIcon} />
        <FaGithub title="GitHub: @moneycabui" onClick={() => window.open('https://github.com/moneycabui')} className={styles.ghIcon} />
      </div>
    </div>
  );
}

export default Contact;