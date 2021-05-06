import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from './ImagesCarousel.css';

class ImagesCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // <div className={`image ${styles.imageA} `} style={{ width: `${cardWidth}`, gridRowEnd: `span ${gridSpan}` }}
  // <img className={styles.image} src="/images/interests/CaboPool.jpeg" alt="Cabo" />

  render () {
    const { images } = this.props;
    const imagesRender = images.map((image, index) => (
      <img
        className={styles.image}
        src={image[0]}
        alt={image[1]}
        key={index + image[1]}
      />
    ))

    return (
      <div className={styles.carousel}>
        <IoIosArrowBack
          className={styles.previousButton}
          size="30"
        />
        <div className={styles.imageContainer}>
          {imagesRender}
        </div>
        <IoIosArrowForward
          className={styles.nextButton}
          size="30"
        />
      </div>
    );
  }
}

export default ImagesCarousel;
