import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './ImagesCarousel.css';

class ImagesCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLeftArrow: true,
      showRightArrow: true,
    };
    this.xScroll = this.xScroll.bind(this);
  }

  xScroll(event, x) {
    const { leftRightClicks } = this.state;
    event.stopPropagation();
    const images = document.getElementById('imageContainer');
    // images.scroll(x, 0);
    images.scrollLeft += x;
  }


  // <div className={`image ${styles.imageA} `} style={{ width: `${cardWidth}`, gridRowEnd: `span ${gridSpan}` }}
  // <img className={styles.image} src="/images/interests/CaboPool.jpeg" alt="Cabo" />

  render () {
    const { showLeftArrow, showRightArrow } = this.state;
    const { images } = this.props;
    const imagesRender = images.map((image, index) => (
      <img
        className={styles.image}
        id={image + index}
        src={image[0]}
        alt={image[1]}
        key={index + image[1]}
      />
    ))

    const scrollLength = 375;

    return (
      <div className={styles.carousel}>
        {showLeftArrow &&
          <IoIosArrowBack
            className={styles.previousButton}
            size="30"
            onClick={(event) => this.xScroll(event, -scrollLength)}
          />
        }
        <div id='imageContainer' className={styles.imageContainer}>
          {imagesRender}
        </div>
        {showRightArrow &&
          <IoIosArrowForward
            className={styles.nextButton}
            size="30"
            onClick={(event) => this.xScroll(event, scrollLength)}
          />
        }
      </div>
    );
  }
}

export default ImagesCarousel;
