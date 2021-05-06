import React from 'react';
import ImagesCarousel from '../ImagesCarousel';
import images from './images.js';
import styles from './Home.css';

const Home = (props) => {
  return (
    <div>
      <div className={styles.intro}>
        <div className={styles.profileWrapper}>
          <img className={styles.profilePhoto} src="/images/ProfilePhoto.jpg" alt="Photo of Monica Bui" />
          <img className={styles.name} src="/images/Name.png" alt="Name" />
        </div>
        <p className={styles.jobTitle}>Software Engineer in the Bay Area</p>
      </div>
      <section className={styles.interests}>
        <h2 className={styles.aboutTitle}>- • Interests • -</h2>
        <ImagesCarousel images={images} />
      </section>
    </div>
  );
}

export default Home;
