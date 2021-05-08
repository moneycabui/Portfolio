import React from 'react';
import ContactAndSocialIcons from '../ContactAndSocialIcons';
import styles from './AboutMe.css';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.introWrapper}>
        <p className={styles.hi}>Hi, my name is</p>
        <div className={styles.profileWrapper}>
          <img className={styles.profilePhoto} src="/images/ProfilePhoto.jpg" alt="Photo of Monica Bui" />
          <img className={styles.name} src="/images/Name.png" alt="Name" />
        </div>
        <ContactAndSocialIcons />

        <h2 className={styles.aboutTitle}>- • About Me • -</h2>
        <div className={styles.bodyText}>I am a full-stack software engineer with a passion for problem solving and deduction. I thrive in situations that require meticulous analytical investigation.</div>
        <div className={styles.bodyText}>Formerly, I was an ABA Certificated Paralegal working in the Emerging Companies, Debt Financing, and Corporate Law fields.</div>
        <div className={styles.bodyText}>Presently volunteering as a Crisis Counselor at Crisis Text Line.</div>
        <div className={styles.bodyText}>Some of my interests include tennis, backpacking, running (I&apos;ve ran two half marathons), photograhy, and art.</div>

        <h2 className={styles.contactTitle}>- • Contact • -</h2>
        <div className={styles.bodyTextg}>Name: Monica Bui</div>
        <div className={styles.contactText} onClick={() => window.open('mailto:monicabbui@gmail.com')}>Email: monicabbui@gmail.com</div>
        <div className={styles.contactText} onClick={() => window.open('https://www.linkedin.com/in/monicabui/')}>linkedin.com/in/monicabui/</div>
        <div className={styles.contactText} onClick={() => window.open('https://github.com/moneycabui/Portfolio')}>github.com/moneycabui</div>
        <Link to="/Contact" className={styles.contactLink}>
          <button className={styles.contactButton}>Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;
