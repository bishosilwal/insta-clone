import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TopNav from './TopNav.jsx'
import Home from './Home.jsx'
import Profile from './Profile.jsx'

export default class Index extends Component {
  render () {
    return(
      <Router>
        <div>
          <TopNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </Switch> 
        </div>  
      </Router>
    );
  }
}

