import React, { Component } from 'react'
import PostForm from './PostForm.jsx'

export default class Home extends Component{

  render(){
    return(
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-5">
            <PostForm />
          </div>
        </div>
      </div>
      )
  }
}