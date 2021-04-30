import React from 'react';
import Header from '../Header';
import Introduction from '../Introduction';
import styles from './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Header />
          <Introduction />
        </div>
      </Router>
    )
  }
}

export default App;
