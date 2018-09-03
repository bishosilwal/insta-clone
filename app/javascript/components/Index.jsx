import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import TopNav from './TopNav.jsx'
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

export default class Index extends Component {
  render () {
    return(
      <Router>
        <div>
          <TopNav />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch> 
        </div>  
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const checkAuth = {
  isAuthenticated(){
    let headers = JSON.parse(window.localStorage.getItem('headers')) || false
    if(headers){
      if(moment(headers) - moment(Date.now())){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }  
  }
};  