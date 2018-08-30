import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './containers/About'
import Projects from './containers/Projects'
import Writing from './containers/Writing'
import Resources from './containers/Resources'
import { Header } from './components/Header'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/writing">Writing</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/writing" component={Writing} />
            <Route path="/resources" component={Resources} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
