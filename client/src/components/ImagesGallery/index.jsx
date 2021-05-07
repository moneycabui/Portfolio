import React from 'react';
import styles from './ImagesGallery.css';

class ImagesGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    const { images } = this.props;
    const imagesGalleryRender = images.map((image, index) => (
      <img
        className={`${styles.image}${index} ${styles.image}`}
        id={image + index}
        src={image[0]}
        alt={image[1]}
        key={index+image[1]}
      />
    ))

    return (
      <div className={styles.gallery}>
        {imagesGalleryRender}
      </div>
    );
  }
}

export default ImagesGallery;
