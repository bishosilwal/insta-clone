import React, { Component } from 'react'


const HOST = 'http://localhost:3000/'
export default class Post extends Component{


  componentDidMount(){

  }

  render(){
    const post = this.props.value
    return(
        <div className="container-fluid mt-5">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <h4> { post.user.name } </h4>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title"></h5>
              { 
                post.attachments.map(function(attachment){
                  return( <img src={HOST+attachment.asset} /> )
                })
              }
            </div>
            <div className="card-footer">
              { post.status } 
            </div>
          </div>
        </div>
      )
  }
}