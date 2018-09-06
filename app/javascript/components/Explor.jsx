import React, { Component } from 'react'
import axios from 'axios'

const HOST = 'http://localhost:3000/api/v1/'
const HEADERS =  JSON.parse(window.localStorage.getItem('headers'))
export default class Explor extends Component{

  state={
    
  }

  componentDidMount(){
    axios.get(HOST+'friends/suggestion',
    {
      headers: HEADERS
    })
    .then(function (res){
      console.log(res)
    })
    .catch(function (err){
      console.log(err)
    });
  }

  render(){
    return(
        <div className="container-fluid ">
          <div className="row justify-content-center">
            <div className="col-10 text-left">
              Discover People
            </div>
            <div className="col-10 ">
              peoples
            </div>
          </div>
        </div>
      )
  }
}