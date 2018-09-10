import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PostForm from './PostForm.jsx'
import Post from './Post.jsx'

const HOST = "http://localhost:3000/api/v1/"
const DOMAIN = 'http://localhost:3000/'
const DATA =  JSON.parse(window.localStorage.getItem('data'))
const HEADERS =  JSON.parse(window.localStorage.getItem('headers'))

export default class Home extends Component{

  state={
    posts: [],
    user: {}
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
    axios.get(HOST+'users/'+DATA.id,{
      headers: HEADERS
    })
    .then(function (res){
      self.setState({user: res.data})
    })
    .catch(function (err){
      console.log(err)
    });
  }

  render(){
    const { posts, user } = this.state
    return(
      <div className="container-fluid" style={{backgroundColor: '#fafafa'}}>
        <div className="row justify-content-center">
          
          <div className="col-6">
            <PostForm fetchData={this.fetchData}/>
          </div>
          <div className="col-12">
          </div>
          <div className="col-3">
          </div>
          <div className="col-5">
            {
              posts.map(function(post,index){
                return(<Post value={post} key={index}/>)
              })
            }
          </div>
          <div className="col-4">
            <Link to="/profile"><img src={DOMAIN+user.avatar} height="60" width="60" className="rounded-circle"/>&nbsp;&nbsp;{user.name} </Link>
          </div>
        </div>
      </div>
      )
  }
}