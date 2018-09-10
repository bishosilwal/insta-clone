import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import checkAuth from '../lib/Auth.js'
import Logout from './Logout.jsx'
import Notification from './Notification.jsx'

const DATA =  JSON.parse(window.localStorage.getItem('data'))
const DOMAIN = 'http://localhost:3000/'
export default class TopNav extends Component{

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top" style={{borderBottom: '1px solid rgba(0,0,0,.0975)'}}>
        <div className="container" style={{paddingLeft: '6rem', paddingRight: '6rem'}}>
          <a className="navbar-brand" href="#"><i className="fab fa-instagram fa-2x"> </i></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item " style={{borderRight: '1px solid #929292'}}>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/"><img src={DOMAIN+"images/insta.png"} height="50px" width="100px" /> <span className="sr-only">(current)</span></a>
              </li>
              <form className="form-inline" style={{marginLeft: '12rem'}}>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text" style={{height: '1.7rem'}}><i className="fas fa-search"></i></div>
                </div>
                <input type="text" id="inlineFormInputGroup" className=" mr-sm-2 nav-search-field" type="search" placeholder="Search" aria-label="Search" />
                
              </div>
                
              </form>
            </ul>
            {

              checkAuth.isAuthenticated()? (
                  <React.Fragment>
                    <div className="my-auto nav-item">
                      <Link to="/explor" className="nav-link"><i className="far fa-compass text-dark" > </i> </Link>
                    </div>
                    <div className="my-auto nav-item">
                      <Notification />  
                    </div>
                    <div className="my-auto nav-item" >
                       <Link to="/profile" className="nav-link"><i className="far fa-user text-dark"> </i> </Link>
                    </div>
                    <div className="my-auto nav-item" >
                       <label className="font-weight-light"> {  DATA.name } </label>
                    </div>
                    <div className="my-2">
                       <Logout />
                    </div>
                  </React.Fragment>  
                ) : ''
            }
            
          </div>  
        </div>
      </nav>
      )
  }
} 