import React from 'react';
import styles from './Lifestyle.css';

class Lifestyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className={styles.lifestyle}>This is the Lifestyle component.</div>
    );
  }
}

export default Lifestyle;