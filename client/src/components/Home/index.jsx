import React from 'react';
import styles from './Home.css';

const Home = (props) => {
  return (
    <div className={styles.intro}>
      <p className={styles.hi}>Hi, my name is</p>
      <div className={styles.profileWrapper}>
        <img className={styles.profilePhoto} src="/images/ProfilePhoto.jpg" alt="Photo of Monica Bui" />
        <img className={styles.name} src="/images/Name.png" alt="Name" />
      </div>
      <p className={styles.jobTitle}>Software Engineer in the Bay Area</p>
      <button className={styles.contactButton} onClick={() => window.open('mailto:monicabbui@gmail.com')}>Email Me</button>
    </div>
  );
}

export default Home;
