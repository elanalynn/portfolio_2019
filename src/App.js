import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Header } from './components/Header'
import { Main } from './containers/Main'
import { Shad } from './containers/Shad'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/shad" component={Shad} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
