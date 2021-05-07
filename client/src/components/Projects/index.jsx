import React from 'react';
// import ImagesGallery from '../ImagesGallery';
import ImagesCarousel from '../ImagesCarousel';
import projects from './projects.js';
import styles from './Projects.css';

const Projects = (props) => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.projectsTitle}>- • Software Engineering Applications • -</h2>
      {/* <ImagesCarousel images={projects}/> */}
      {/* <ImagesGallery images={projects}/> */}
    </div>
  );
}

export default Projects;
