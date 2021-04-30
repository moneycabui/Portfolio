import React from 'react';
import Header from '../Header';
import Introduction from '../Introduction';
import AboutMe from '../AboutMe';
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
          <Switch>
            {/* <Route path="/">
              <Introduction />
            </Route>
            <Route path="/AboutMe">
              <AboutMe />
            </Route> */}

            <Route path="/" component={Introduction} exact />
            <Route path="/AboutMe" component={AboutMe} exact/>

            <Route path="*" render={() => (<div>No Route</div>)} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
