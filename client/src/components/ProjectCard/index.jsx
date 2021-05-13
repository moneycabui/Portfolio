import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import styles from './ProjectCard.css';

const ProjectCard = ({ images }) => {
  const projectDetails = images[1];
  const projectLink = images[1][3] || 'https://github.com/moneycabui/Portfolio';

  return (
    <div className={styles.projectCards}>
      <div className={styles.projectDetails}>
        <div className={styles.projectTitle}>{projectDetails[0]}</div>
        <div className={styles.groupName}>{projectDetails[1]}</div>
        <div className={styles.jobTitle}>{projectDetails[2]}</div>
        <div className={styles.projectDescription}>{projectDetails[4]}</div>
      </div>
      <VscGithub
        title="Project GitHub"
        onClick={() => window.open(`${projectLink}`)}
        className={styles.ghIcon}
        size={40}
      />
    </div>
  );
}

export default ProjectCard;
