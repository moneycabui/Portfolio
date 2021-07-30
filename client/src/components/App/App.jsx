import React from 'react';
import Header from '../Header';
import Modal from '../Modal'
import Footer from '../Footer';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import Contact from '../Contact';
import Home from '../Home';
import Resume from '../Resume';
import styles from './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  HashRouter
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      imageDisplayed: '',
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(event, imageDisplayed) {
    event.preventDefault();
    this.setState({
      displayModal: true,
      imageDisplayed: imageDisplayed,
    });
    document.querySelector("html").style.overflowY = "hidden";
    document.getElementById("contents").style.filter = "blur(8px)";
    document.getElementById("contents").onclick = this.closeModal;
  }

  closeModal(event) {
    event.preventDefault();
    this.setState({ displayModal: false });
    document.querySelector("html").style.overflowY = "unset";
    document.getElementById("contents").style.filter = "none";
  }

  render() {
    const { displayModal, imageDisplayed } = this.state;

    return (
      <Router>
        <div className={styles.app}>
          <Header closeModal={this.closeModal} displayModal={displayModal} />
          {displayModal &&
            <Modal imageDisplayed={imageDisplayed} closeModal={this.closeModal} />
          }
          <div id="contents">
            <HashRouter>
              <Route path="/"exact>
                <Home
                  openModal={this.openModal}
                />
              </Route>
              <Route path="/AboutMe" component={AboutMe} exact/>
              <Route path="/Projects" exact>
                <Projects
                  openModal={this.openModal}
                />
              </Route>
              {/* <Route path="/Projects" component={Projects} exact/> */}
              <Route path="/Contact" component={Contact} exact/>
              <Route path="/Resume" component={Resume} exact/>
              <Route path="*" render={() => (<div>Page does not exist.</div>)} />
            </HashRouter>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
