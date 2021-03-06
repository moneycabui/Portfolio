import React from 'react';
import ImagesGallery from '../ImagesGallery';
import ProjectCard from '../ProjectCard';
import ResumeDownload from '../ResumeDownload';
import blueOceanProject from './blueOceanProject.js';
import mvpProject from './mvpProject.js';
import fecProject from './fecProject.js';
import sdcProject from './sdcProject.js';
import styles from './Projects.css';

const Projects = ({ openModal }) => {
  const listOfProjectsWithImages = [blueOceanProject, fecProject, mvpProject];
  const listOfProjects = [sdcProject];

  const projectImageCards = listOfProjectsWithImages.map((project, index) => (
    <ImagesGallery
      images={project}
      key={project + index}
      openModal={openModal}
    />
  ));

  const projectTextCards = listOfProjects.map((project, index) => {
    <ProjectCard images={project} key={project + index} />
  });

  return (
    <div className={styles.projects}>
      <h2 className={styles.projectsTitle}>- • Software Engineering Applications • -</h2>
      <div className={styles.gallery}>
        {projectImageCards}
        {projectTextCards}
        <ProjectCard images={sdcProject} />
        <ResumeDownload />
      </div>
    </div>
  );
}

export default Projects;
