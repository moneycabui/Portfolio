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
  }

  render () {
    const { showLeftArrow, showRightArrow } = this.state;
    const { images } = this.props;

    const scrollLength = 375; // Future implementation: customized lengths
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
          onClick={(event) => this.xScroll(event, -scrollLength)}
          />
          : <div className={styles.previousButtonPlaceholder}></div>
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
          size="20"
          onClick={(event) => this.xScroll(event, scrollLength)}
          />
        }
      </div>
    );
  }
}

export default ImagesCarousel;
