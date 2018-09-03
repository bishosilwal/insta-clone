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
                  <input type="text" className="form-control" id="username" placeholder="username" name="username" onChange={this.handleInput}/>
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