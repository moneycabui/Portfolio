import React from 'react';
import ImagesGallery from '../ImagesGallery';
import fecProject from './fecProject.js';
import sdcProject from './sdcProject.js';
import styles from './Projects.css';

const Projects = (props) => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.projectsTitle}>- • Software Engineering Applications • -</h2>
      <div className={styles.gallery}>
        <ImagesGallery images={fecProject}/>
        <ImagesGallery images={sdcProject}/>
        <ImagesGallery images={fecProject}/>
        <ImagesGallery images={sdcProject}/>
      </div>
    </div>
  );
}

export default Projects;
