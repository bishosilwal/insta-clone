import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

export default class Logout extends Component{
  state={
    login: true
  }

  handleLogout= (e) =>{
    let headers = JSON.parse(window.localStorage.getItem('headers'))
    var self = this
    axios.delete("http://localhost:3000/api/v1/auth/sign_out",
      { headers:headers
      }).then(function (response){
        window.localStorage.clear()
        self.setState({login: false})
      }).catch(function (errors){
        console.log(errors)
      });
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