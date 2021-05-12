import React from 'react';
import ImagesCarousel from '../ImagesCarousel';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import ResumeDownload from '../ResumeDownload';
import Contact from '../Contact';
import images from './images.js';
import styles from './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className={styles.hello}>Hello</div>
      <section className={styles.intro}>
        <div className={styles.profileWrapper}>
          <img className={styles.profilePhoto} src="/images/ProfilePhoto.jpg" alt="Photo of Monica Bui" />
          <img className={styles.name} src="/images/Name.png" alt="Name" />
        </div>
        <p className={styles.jobTitle}>Software Engineer in the Bay Area</p>
      </section>
      <section className={styles.interests}>
        <h2 className={styles.aboutTitle}>- • Preview of My Life • -</h2>
        <div className={styles.carousel}>
          <ImagesCarousel images={images} />
        </div>
      </section>
    </div>
  );
}

export default Home;
