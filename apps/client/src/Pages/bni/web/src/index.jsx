import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Page} exact path="/page" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

export default App
