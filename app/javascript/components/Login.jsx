import React, { Component }  from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component{
  state={
      email: '',
      password: '',
      login: false
    }

  handleInput = (e) =>{
    let state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleLogin = (e) =>{
    e.preventDefault();
    var self = this
    let userInfo = this.state
    axios.post('http://localhost:3000/api/v1/auth/sign_in', userInfo)
    .then(function (response){
      window.localStorage.setItem('data', JSON.stringify(response.data.data))
      window.localStorage.setItem('headers', JSON.stringify(response.headers))
      self.setState({login: true})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    let {login} = this.state

    if(login){
      return(<Redirect to="/" />)
    }
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
          </div>
          <div className="col-2 text-center mt-5">
            <form className="form-signin" onSubmit={this.handleLogin}>
              <img className="mb-4" src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" alt="" width="60" height="60" />
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" required autoFocus onChange={this.handleInput} />
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" required onChange={this.handleInput}/>
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              </div>  
              <Link to="/signup">sign up </Link>
            </form>
          </div>
          <div className="col-5">
          </div>
        </div>
         
      </div>
      )
  }
}