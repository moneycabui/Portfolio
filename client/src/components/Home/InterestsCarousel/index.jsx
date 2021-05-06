import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from './InterestsCarousel.css';
import images from './images.js';

class InterestsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftArrowHover: false,
      rightArrowHover: false,
    };
    this.toggleBackground = this.toggleBackground.bind(this);
  }

  toggleBackground(direction) {
    const { increaseOpacity } = this.state;
    console.log('Toggle')
    this.setState({ increaseOpacity: !increaseOpacity })
  }

  // <div className={`image ${styles.imageA} `} style={{ width: `${cardWidth}`, gridRowEnd: `span ${gridSpan}` }}
  // <img className={styles.image} src="/images/interests/CaboPool.jpeg" alt="Cabo" />

  render () {
    const imagesRender = images.map((image, index) => (
      <div className={styles.imageContainer} key={index + image[1]}>
        <img className={styles.image} src={image[0]} alt={image[1]} />
      </div>
    ))

    return (
      <div className={styles.carousel}>
        {imagesRender}
        <div className={styles.arrows}>
          <IoIosArrowBack
            className={styles.previousButton}
            onMouseEnter={() => this.toggleBackground('left')}
            onMouseLeave={() => this.toggleBackground('left')}
            size="40"
            />
          <IoIosArrowForward
            className={styles.nextButton}
            onMouseEnter={() => this.toggleBackground('right')}
            onMouseLeave={() => this.toggleBackground('right')}
            size="40"
          />
        </div>
      </div>
    );
  }
}

export default InterestsCarousel;

// Notes and experimentation:

// <div className={styles.imageCountainers}>
//   <img className={styles.image} src="/images/interests/CaboPool.jpeg" alt="Cabo" />
// </div>
// <div className={styles.imageCountainers}>
//   <img className={styles.image} src="/images/interests/YosemiteBackpacking.jpg" alt="Cabo" />
// </div>
// <div className={styles.imageCountainers}>
//   <img className={styles.image} src="/images/interests/GlacierPoint.jpg" alt="Cabo" />
// </div>
// <div className={styles.imageCountainers}>
//   <img className={styles.image} src="/images/interests/YosemiteHammock.jpg" alt="Cabo" />
// </div>
// <div className={styles.imageCountainers}>
//   <img className={styles.image} src="/images/interests/BackpackingFood.jpg" alt="Cabo" />
// </div>
// <div className={styles.imageCountainers}>
//   <img className={styles.image} src="/images/interests/Canyon.jpeg" alt="Canyon" />
// </div>
// <div className={styles.imageCountainers}>
//   <img className={styles.image} src="/images/interests/LakePowell.jpeg" alt="Lake Powell" />
// </div>
// <div className={styles.imageCountainers}>
//   <img className={styles.image} src="/images/interests/BobaStitch.jpeg" alt="Boba Stitch" />
// </div>

// const imagesRender = images.map((image, index) => (
//   <img className={styles.image} src={image[0]} alt={image[1]} key={index + image[1]} />
// ))

// return (
//   <div className={styles.carousel}>
//     <div className={styles.imageContainer}>
//       {imagesRender}
//     </div>
//     <div className={styles.arrows}>
//       <IoIosArrowBack
//         className={styles.previousButton}
//         onMouseEnter={() => this.toggleBackground('left')}
//         onMouseLeave={() => this.toggleBackground('left')}
//         size="40"
//         />
//       <IoIosArrowForward
//         className={styles.nextButton}
//         onMouseEnter={() => this.toggleBackground('right')}
//         onMouseLeave={() => this.toggleBackground('right')}
//         size="40"
//       />
//     </div>
//   </div>
// );
