import React, { Component } from 'react'
import axios from 'axios'

const HOST = 'http://localhost:3000/api/v1/'
const DOMAIN = 'http://localhost:3000/'
const HEADERS =  JSON.parse(window.localStorage.getItem('headers'))
const DATA =  JSON.parse(window.localStorage.getItem('data'))

export default class Profile extends Component{

  state={
    user: {}
  }
  componentWillMount(){
    var self = this
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

  handleProfileChange = (e) => {
    this.inputElement.click();
  }

  handleProfileInputChange = (e) => {
    var self = this
    let formData = new FormData()
    formData.append('avatar', e.target.files[0])
    axios({
      method: 'post',
      url: HOST+'users/avatar',
      data: formData,
      headers: {
        ...HEADERS
      },
      contentType: "multipart/form-data"
    })
    .then(function (res){
      self.setState({user: res.data})
    })
    .catch(function (err){
      console.log(err)
    })
  }

  render(){
    const { user } = this.state
    console.log(user)
    return(
        <div className="container">
          <div className="row mt-5">
            <div className="col-4">
              <img src={DOMAIN+user.avatar} className="user-profile-image" data-toggle="tooltip" data-placement="top" title="Change profile image" onClick={this.handleProfileChange}/>
              <input type="file" ref={input => this.inputElement = input} style={{ opacity: '0', width: '2px'}} onChange={this.handleProfileInputChange} />
            </div>
          </div>
        </div>
      )
  }
}