import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TopNav from './TopNav.jsx'
import Home from './Home.jsx'

export default class Index extends Component {
  render () {
    return (
      <Router>
        <div>
          <TopNav />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch> 
        </div>  
      </Router>
    );
  }
}

