import React, { Component }  from 'react'
import {Link} from 'react-router-dom'

export default class Signup extends Component{

  state={
    username: '',
    password: '',
    email: ''
  }

  handleInput = (e) => {
    let state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log("submit clicked")
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
          </div>
          <div className="col-4 text-center mt-5">
            <h3>Please Sign up </h3>
            <form onSubmit={this.handleSubmit}>
              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email" name="email" autofocus onChange={this.handleInput} required/>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password:</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3" placeholder="Password" name="password" onChange={this.handleInput} required/>
                </div>
              </div>
              <div class="form-group row">
                <label for="username" class="col-sm-2 col-form-label">Username:</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="username" placeholder="username" name="username" onChange={this.handleInput}/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary">Sign up</button>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-10">
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