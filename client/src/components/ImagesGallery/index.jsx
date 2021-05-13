import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import styles from './ImagesGallery.css';

const ImagesGallery = ({ images, openModal }) => {
  const imageGrid = images[0].slice(0, 5);
  const projectDetails = images[1];
  const projectLink = images[1][3] || 'https://github.com/moneycabui/Portfolio';

  const imagesGalleryRender = imageGrid.map((image, index) => (
    <div className={styles.imageWrapper} key={index+image[1]}>
      <img
        className={`${styles.image}${index} ${styles.image}`}
        id={'styles.image' + index}
        src={image[0]}
        alt={image[1]}
        onClick={(event) => openModal(event, image)}
      />
    </div>
  ))
  return (
    <div className={styles.gallery}>
      <div className={styles.projectDetails}>
        <div className={styles.projectTitle}>{projectDetails[0]}</div>
        <div className={styles.groupName}>{projectDetails[1]}</div>
        <div className={styles.jobTitle}>{projectDetails[2]}</div>
        <div className={styles.projectDescription}>{projectDetails[4]}</div>
      </div>
      {imagesGalleryRender}
      <VscGithub
        title="Project Link"
        onClick={() => window.open(`${projectLink}`)}
        className={styles.ghIcon}
        size={40}
      />
    </div>
  );
}

export default ImagesGallery;
