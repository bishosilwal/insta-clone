import React, { Component } from 'react'

export default class Post extends Component{


  componentDidMount(){

  }

  render(){
    const post = this.props.value
    return(
        <div className="container-fluid mt-5">
          <div className="card">
            <div className="card-header">
              {post.status}
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer">
              hello
            </div>
          </div>
        </div>
      )
  }
}