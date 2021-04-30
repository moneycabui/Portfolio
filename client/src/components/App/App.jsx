import React from 'react';
import Header from '../Header';
import Introduction from '../Introduction';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import TechSkills from '../TechSkills';
import Education from '../Education';
import Resume from '../Resume';
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
            <Route path="/" component={Introduction} exact />
            <Route path="/AboutMe" component={AboutMe} exact/>
            <Route path="/Projects" component={Projects} exact/>
            <Route path="/TechSkills" component={TechSkills} exact/>
            <Route path="/Education" component={Education} exact/>
            <Route path="/Resume" component={Resume} exact/>
            <Route path="*" render={() => (<div>No Route</div>)} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
