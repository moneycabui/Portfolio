import React from 'react';
import ImagesGallery from '../ImagesGallery';
import ResumeDownload from '../ResumeDownload';
import blueOceanProject from './blueOceanProject.js';
import mvpProject from './mvpProject.js';
import fecProject from './fecProject.js';
import sdcProject from './sdcProject.js';
import styles from './Projects.css';

const Projects = () => {
  const listOfProjects = [mvpProject, blueOceanProject, fecProject, sdcProject];

  const projectCards = listOfProjects.map((project, index) => (
    <ImagesGallery images={project} key={project + index}/>
  ))

  return (
    <div className={styles.projects}>
      <h2 className={styles.projectsTitle}>- • Software Engineering Applications • -</h2>
      <div className={styles.gallery}>
        <ResumeDownload />
        {projectCards}
      </div>
    </div>
  );
}

export default Projects;
