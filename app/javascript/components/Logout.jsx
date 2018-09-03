import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Logout extends Component{
  state={
    login: true
  }

  handleLogout= (e) =>{
    window.localStorage.clear()
    this.setState({login: false})
  }

  render(){
    let {login} = this.state
    if(login){
      return(
          <button type="button" className="btn btn-default" onClick={this.handleLogout}>Logout</button>
        )
    }else{
      return(
          <Redirect to="/" />
        )
    }
      
  }
}