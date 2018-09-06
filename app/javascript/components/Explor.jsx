import React, { Component } from 'react'
import axios from 'axios'

const HOST = 'http://localhost:3000/api/v1/'
const HEADERS =  JSON.parse(window.localStorage.getItem('headers'))
export default class Explor extends Component{

  state={
    allUser: []
  }

  componentDidMount(){
   this.getFriendSuggestion()
  }

  getFriendSuggestion(){
    var self = this
    axios.get(HOST+'friends/suggestion',
    {
      headers: HEADERS
    })
    .then(function (res){
      self.setState({allUser: res.data})
    })
    .catch(function (err){
      console.log(err)
    }); 
  }

  handleFollowClick = (friend_id) => {
    var self = this
    axios.post(HOST+'friend_ships',{
      friend_id: friend_id
    },
    {
      headers: HEADERS
    }
    )
    .then(function (res){
      self.getFriendSuggestion()
    })
    .catch(function(err){
      console.log(err)
    });
  }

  render(){
    const { allUser } = this.state
    return(
        <div className="container-fluid ">
          <div className="row justify-content-center">
            <div className="col-10 text-left">
              Discover People
            </div>
            <div className="col-10 row">
              {
                allUser.map((user, index) => {
                  return(
                      <div className="card m-2 user-suggest-card shadow" key={index}>
                        <div className="card-body">
                          <h5 className="card-title">{user.name}</h5>
                          <label> { user.email } </label><br/>  
                          <button className="btn btn-primary btn-sm" onClick={(e) => this.handleFollowClick(user.id) }>Follow</button>
                        </div>
                      </div>
                    )
                })
              }
            </div>
          </div>
        </div>
      )
  }
}