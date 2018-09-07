import React, { Component } from 'react'
import axios from 'axios'
const HOST = 'http://localhost:3000/api/v1/'
const HEADERS =  JSON.parse(window.localStorage.getItem('headers'))

export default class Notification extends Component{

  state={
    notifications: []
  }

  getNotification = (e) => {
    var self = this
    axios.get(HOST+'notifications',
    {
      headers: HEADERS  
    })
    .then(function (res){
      self.setState({notifications: res.data})
    })
    .catch(function (err){
      console.log(err)
    })
  }

  render(){
    const { notifications } = this.state
    return(
      <div className="btn-group">
        <i className="far fa-heart dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.getNotification}></i>
        <div className="dropdown-menu dropdown-menu-right" style={{minWidth: '25rem', maxHeight: '20rem', overflow: 'auto'}}>
          <div className="container">
            <ul style={{ listStyleType: 'none' }}>
              {
                notifications.length==0 ?
                    <li> No any notifications </li>
                    :
                      notifications.map(function(notification, index){
                        return(
                            <li> <span style={{fontWeight: '600'}}>{notification.creator.name}</span> {notification.message}</li>
                          )
                      })
                  
              }
            </ul>
          </div>
        </div>
      </div>

      )
  }
}