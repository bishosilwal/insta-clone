import React, { Component } from 'react'
import axios from 'axios'

const HOST = 'http://localhost:3000/api/v1/'
const HEADERS =  JSON.parse(window.localStorage.getItem('headers'))
const DATA =  JSON.parse(window.localStorage.getItem('data'))

export default class Like extends Component{

  state={
    post_id: this.props.post_id,
    likes: []
  }

  componentWillMount(){
    var self = this
    axios.get(HOST+'posts/'+this.props.post_id+'/likes',
    {
      headers: HEADERS   
    })
    .then(function (res){
      self.setState({ likes: res.data })
    })
    .catch(function (err){
      console.log(err)
    });
  }

  handleLike = (e) => {
    var self = this
    if( this.checkLiked() ){
      let like_id = this.likedId()
      axios({
        method: 'delete',
        url: HOST+'posts/'+this.state.post_id+'/likes/'+like_id,
        headers: HEADERS
      })
      .then(function (res){
        self.removeLike(res.data)
      })
      .catch(function (err){
        console.log(err)
      }); 
    }else{
      axios({
        method: 'post',
        url: HOST+'posts/'+this.state.post_id+'/likes',
        headers: HEADERS
      })
      .then(function (res){
        const { likes } = self.state
        likes.push(res.data)
        self.setState({likes: likes})
      })
      .catch(function (err){
        console.log(err)
      }); 
    }
  }

  removeLike = (deletedLike) => {
    const { likes } = this.state
    for (var like in likes){
      if(deletedLike.id == likes[like].id){
        likes.splice(like,1)
      }
    }
    this.setState({likes: likes})
  }

  likedId= (_) => {
    const { likes } = this.state
    for(var like in likes){
      if(likes[like].user_id == DATA.id ){
        return likes[like].id
      }
    }
  }

  checkLiked = (_) => {
    const { likes } = this.state
    for(var like in likes){
      if(likes[like].user_id == DATA.id ){
        return true
      }
    }
    return false
  }

  render(){
    const { likes } = this.state
    return(
      <div>
        <i className="fas fa-heart" onClick={ this.handleLike } style={{ color: this.checkLiked() ? '#ed4956' : ''}}> </i><br/>
        { likes.length } likes
      </div>
      )
  }
}