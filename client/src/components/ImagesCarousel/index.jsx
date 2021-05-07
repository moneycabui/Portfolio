import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './ImagesCarousel.css';

class ImagesCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLeftArrow: false,
      showRightArrow: true,
    };
    this.xScroll = this.xScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  xScroll(event, x) {
    const { showLeftArrow, showRightArrow } = this.state;
    event.stopPropagation();
    const carousel = document.getElementById('imageContainer');
    carousel.scrollLeft += x;
    this.handleScroll();
  }

  handleScroll() {
    const carousel = document.getElementById('imageContainer');
    const carouselWidth = carousel.scrollWidth - carousel.clientWidth - 5;
    this.setState({
      showLeftArrow: carousel.scrollLeft > 0,
      showRightArrow: carousel.scrollLeft < carouselWidth,
    })
    console.log('Scrolled');
  }


  // <div className={`image ${styles.imageA} `} style={{ width: `${cardWidth}`, gridRowEnd: `span ${gridSpan}` }}
  // <img className={styles.image} src="/images/interests/CaboPool.jpeg" alt="Cabo" />

  render () {
    const { showLeftArrow, showRightArrow } = this.state;
    const { images } = this.props;

    const scrollLength = 375; // Change to width
    const imagesRender = images.map((image, index) => (
      <img
        className={styles.image}
        id={image + index}
        src={image[0]}
        alt={image[1]}
        key={index + image[1]}
      />
    ))


    return (
      <div className={styles.carousel}>
        {showLeftArrow
        ? <IoIosArrowBack
          className={styles.previousButton}
          size="30"
          onClick={(event) => this.xScroll(event, -scrollLength)}
          />
          : <div className={styles.previousTemp}></div>
        }
        <div
          id='imageContainer'
          className={styles.imageContainer}
          onScroll={this.handleScroll}
        >
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
