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
    this.handleScrollClick = this.handleScrollClick.bind(this);
    this.handleWheelScroll = this.handleWheelScroll.bind(this);
    this.handleScrollArrows = this.handleScrollArrows.bind(this);
  }

  handleScrollClick(event, x) {
    event.stopPropagation();
    const carousel = document.getElementById('imageContainer');
    carousel.scrollLeft += x;
    this.handleScrollArrows();
  }

  handleWheelScroll(event) {
    event.stopPropagation();
    const carousel = document.getElementById('imageContainer');
    const carouselScrollPosition = carousel.scrollLeft;
    carousel.scrollTo({
        top: 0,
        left: (carouselScrollPosition + event.deltaY),
        behaviour: 'smooth',
    })
    this.handleScrollArrows();
  }

  handleScrollArrows() {
    event.stopPropagation();
    const carousel = document.getElementById('imageContainer');
    const scrollableWidth = carousel.scrollWidth - carousel.clientWidth - 5;
    this.setState({
      showLeftArrow: carousel.scrollLeft > 0,
      showRightArrow: carousel.scrollLeft < scrollableWidth,
    })
  }


  render () {
    const { showLeftArrow, showRightArrow } = this.state;
    const { images } = this.props;
    const scrollLength = 375; // Future implementation: pass down scroll length
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
          size="20"
          onClick={(event) => this.handleScrollClick(event, -scrollLength)}
          />
          : <div className={styles.previousButtonPlaceholder}></div>
        }
        <div
          id='imageContainer'
          className={styles.imageContainer}
          onScroll={this.handleScrollArrows}
          onWheel={this.handleWheelScroll}
        >
          {imagesRender}
        </div>
        {showRightArrow &&
          <IoIosArrowForward
          className={styles.nextButton}
          size="20"
          onClick={(event) => this.handleScrollClick(event, scrollLength)}
          />
        }
      </div>
    );
  }
}

export default ImagesCarousel;
