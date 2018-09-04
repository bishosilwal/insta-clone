import React, { Component } from 'react'
import axios from 'axios'
import PostForm from './PostForm.jsx'

const HOST = 'http://localhost:3000/api/v1/'
const HEADERS =  JSON.parse(window.localStorage.getItem('headers'))

export default class Home extends Component{


  componentDidMount(){
    this.fetchData()
  }

  fetchData = (e) =>{
    axios.get(HOST+'posts',
      { headers: HEADERS
      }).then(function (response){
      console.log(response)
    }).catch(function (errors){
      console.log(errors)
    });
    console.log('fetchData called')
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-5">
            <PostForm fetchData={this.fetchData}/>
          </div>
        </div>
      </div>
      )
  }
}