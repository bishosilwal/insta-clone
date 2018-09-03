import React, { Component }  from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      username: '',
      password: ''
    };
  }
    

  handleInput = (e)=>{
    console.log('function trigger')
     debugger; 
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
          </div>
          <div className="col-2 text-center mt-5">
            <form className="form-signin">
              <img className="mb-4" src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" alt="" width="60" height="60" />
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" required autofocus onChange={this.handleInput.bind(this)} />
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
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