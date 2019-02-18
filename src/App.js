import React, { Component } from 'react'
import { Header } from './components/Header'
import { About } from './containers/About'
import { Projects } from './containers/Projects'
import { Writing } from './containers/Writing'
import { Resume } from './containers/Resume'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <About />
          <Projects />
          {/* <Writing /> */}
          <Resume />
        </main>
      </div>
    )
  }
}

export default App
