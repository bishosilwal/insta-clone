import React, { Component } from 'react'
import axios from 'axios'
import Logout from './Logout.jsx'


const HOST = 'http://localhost:3000/api/v1/'
const DOMAIN = 'http://localhost:3000/'
const HEADERS =  JSON.parse(window.localStorage.getItem('headers'))
const DATA =  JSON.parse(window.localStorage.getItem('data'))

export default class Profile extends Component{

  state={
    user: {
      posts: [],
      inverse_friends: [],
      friends: [],
    },
    attachments: []
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

    axios.get(HOST+'attachments/',{
      headers: HEADERS
    })
    .then(function (res){
      self.setState({attachments: res.data})
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
    const { user, attachments } = this.state
    return(
        <div className="container">
          <div className="row mt-5 mb-5 justify-content-center">
            <div className="col-2">
              <img src={DOMAIN+user.avatar} className="user-profile-image" data-toggle="tooltip" data-placement="top" title="Change profile image" onClick={this.handleProfileChange}/>
              <input type="file" ref={input => this.inputElement = input} style={{ opacity: '0', width: '2px'}} onChange={this.handleProfileInputChange} />
            </div>
            <div className="col-6">
              <div className="row">
                <h3 style={{fontWeight: '400'}}> {user.name} </h3>
                <button type="button" className="btn edit-profile-button ml-3 mr-3">Edit Profile</button>
                <i className="fas fa-cog" data-toggle="modal" data-target="#settingModal"> </i>
              </div>
              <div className="row">
                <label className="mr-1 font-weight-bold">{ user.posts.length} </label> posts
                <label className="ml-3 font-weight-bold mr-1">{ user.inverse_friends.length} </label> followers
                <label className="ml-3 font-weight-bold mr-1"> {user.friends.length}</label> following
              </div>
              <div className="row">
                <div className="col p-0">
                  <label className="font-weight-bold m-0">Nick name </label><br/>
                  @learning_to_fly😍😍
                </div>
              </div>  
            </div>
            <div className="col-8 mt-5">
              <ul className="nav nav-tabs profile-tab" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active font-weight-bold" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true"><span style={{fontSize: '0.8rem'}}><i className="fas fa-th-list" style={{ fontSize: '0.7rem'}}></i>&nbsp; POSTS</span></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link font-weight-bold" id="saved-tab" data-toggle="tab" href="#saved" role="tab" aria-controls="saved" aria-selected="false"><span style={{fontSize: '0.8rem'}}>SAVED</span></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link font-weight-bold" id="tagged-tab" data-toggle="tab" href="#taged" role="tab" aria-controls="tagged" aria-selected="false"><span style={{fontSize: '0.8rem'}}>TAGGED</span></a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                  <div className="container">
                    <div className="row">
                      {
                        attachments.map(function(attachment, index){
                          if(attachment.asset_content_type.search('image')==0){
                            return(
                              <div className="col-4 mt-4" key={index}>
                                <img className="d-block w-100" src={DOMAIN+attachment.asset} width="100px" height="150px" /> 
                              </div>
                              )  
                          }else if(attachment.asset_content_type.search('video')==0){
                            return(
                              <div className="col-4 mt-4" key={index}>
                                <video  controls src={ DOMAIN +attachment.asset} width="100px" height="150px" className="embed-responsive embed-responsive-16by9 embed-responsive-item" ></video>
                              </div>
                              )
                          }
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="saved" role="tabpanel" aria-labelledby="saved-tab">...</div>
                <div className="tab-pane fade" id="tagged" role="tabpanel" aria-labelledby="tagged-tab">...</div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="settingModal" tabindex="-1" role="dialog" aria-labelledby="settingModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content rounded">
                <div class="modal-body" style={{padding: '0px', textAlign: 'center'}}>
                  <ul class="list-group">
                    <li class="list-group-item">Change Password</li>
                    <li class="list-group-item" data-dismiss="modal"><Logout /></li>
                    <li class="list-group-item" data-dismiss="modal">close</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}