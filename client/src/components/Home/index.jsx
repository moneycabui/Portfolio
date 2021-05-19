import React from 'react';
import { IoDownloadOutline, IoOpenOutline } from 'react-icons/io5';
import ImagesCarousel from '../ImagesCarousel';
import ResumeIcons from '../ResumeIcons';
import images from './images.js';
import styles from './Home.css';

const Home = ({ openModal }) => {
  return (
    <div>
      {/* <div className={styles.hello}>Hello</div> */}
      <section className={styles.intro}>
        <div className={styles.profileWrapper}>
          <img className={styles.profilePhoto} src="/images/ProfileImage.jpg" alt="Photo of Monica Bui" />
          <img className={styles.name} src="/images/Name.png" alt="Name" />
        </div>
        <p className={styles.jobTitle}>Software Engineer in the Bay Area</p>
      </section>
      <section className={styles.interests}>
        <h2 className={styles.aboutTitle}>- • Preview of My Life • -</h2>
        <div className={styles.carousel}>
          <ImagesCarousel images={images} openModal={openModal} />
        </div>
      </section>
      <div className={styles.ResumeIcons}>
        <ResumeIcons />
      </div>
    </div>
  );
}

export default Home;
