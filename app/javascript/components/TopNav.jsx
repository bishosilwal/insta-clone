import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import checkAuth from '../lib/Auth.js'
import Logout from './Logout.jsx'

export default class TopNav extends Component{

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Clone</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </ul>
            <div className="my-auto nav-item">
              <Link to="/explor" className="nav-link"><i className="far fa-compass" > </i> </Link>
            </div>
            <div className="my-auto nav-item" >
               <Link to="/profile" className="nav-link"><i className="far fa-user"> </i> </Link>
            </div>
            <div className="my-2">
              {checkAuth.isAuthenticated()? <Logout />:''}
            </div>
          </div>  
        </div>
      </nav>
      )
  }
} 