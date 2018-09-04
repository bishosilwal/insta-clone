import React, { Component } from 'react'
import axios from 'axios'
import PostForm from './PostForm.jsx'
import Post from './Post.jsx'

const HOST = 'http://localhost:3000/api/v1/'
const HEADERS =  JSON.parse(window.localStorage.getItem('headers'))

export default class Home extends Component{

  state={
    posts: []
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = (e) =>{
    var self = this
    axios.get(HOST+'posts',
    { 
      headers: HEADERS
    })
    .then(function (response){
        self.setState({posts: response.data})
    })
    .catch(function (errors){
      console.log(errors)
    });
  }

  render(){
    const { posts } = this.state
    console.log(posts)
    return(
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-4">
          </div>
          <div className="col-4">
            <PostForm fetchData={this.fetchData}/>
          </div>
          <div className="col-4">
          </div>
          <div className="col-7">
            {
              posts.map(function(post){
                return(<Post value={post} />)
              })
            }
          </div>
        </div>
      </div>
      )
  }
}