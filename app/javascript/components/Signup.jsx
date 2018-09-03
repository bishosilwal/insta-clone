import React, { Component }  from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'

export default class Signup extends Component{

  state={
    name: '',
    password: '',
    email: '',
    redirect: false
  }

  handleInput = (e) => {
    let state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    var self = this
    let signup = this.state
    axios.post('http://localhost:3000/api/v1/auth', signup
     )
    .then(function (response) {
      window.localStorage.setItem('headers', JSON.stringify(response.headers))
      window.localStorage.setItem('data',   JSON.stringify(response.data.data))
      self.setState({redirect: true})
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render(){
    const { redirect } = this.state
    if(redirect){
      return(<Redirect to="/" />)  
    }
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
          </div>
          <div className="col-4 text-center mt-5">
            <h3>Please Sign up </h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail3" placeholder="Email" name="email" autoFocus onChange={this.handleInput} required/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password:</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password" onChange={this.handleInput} required/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="username" placeholder="username" name="name" onChange={this.handleInput}/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <Link to="/login">Login</Link>
                </div>
              </div>
            </form>
          </div>
          <div className="col-4">
          </div>
        </div>
         
      </div>
      )
  }
}