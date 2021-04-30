import React from 'react';
import styles from './AboutMe.css';

const AboutMe = (props) => {
  return (
    <div className={styles.intro}>
      <p className={styles.hi}>Hi, my name is</p>
      <div className={styles.profileWrapper}>
        <img className={styles.profilePhoto} src="/images/ProfilePhoto.jpg" alt="Photo of Monica Bui" />
        {/* <div></div> */}
        <img className={styles.name} src="/images/Name.png" alt="Name" />
      </div>
      <p>I am a software engineer with a passion for problem solving and deduction. I thrive in situations that require meticulous analytical investigation.</p>
      <p>Formerly, I was an ABA Certificated Paralegal working in the Emerging Companies, Debt Financing, and Corporate Law fields. </p>
      <p>Presently volunteering as a Crisis Counselor at Crisis Text Line.</p>
      <p>Some of my interests include tennis, backpacking, running (I&apos;ve ran two half marathons), photograhy, and art.</p>
      <button className={styles.contactButton} onClick={() => window.open('mailto:monicabbui@gmail.com')}>Email Me</button>
    </div>
  );
}

export default AboutMe;
