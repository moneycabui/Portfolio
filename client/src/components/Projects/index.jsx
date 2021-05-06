import React from 'react';
import ProjectsGallery from './ProjectsGallery';
import styles from './Projects.css';

const Projects = (props) => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.projectsTitle}>- • Software Engineering Applications • -</h2>
      Page currently under construction.
      <ProjectsGallery />
    </div>
  );
}

export default Projects;
