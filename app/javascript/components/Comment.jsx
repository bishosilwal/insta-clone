import React, { Component } from 'react'
import axios from 'axios'

const HOST = 'http://localhost:3000/api/v1/'
const HEADERS =  JSON.parse(window.localStorage.getItem('headers'))

export default class Comment extends Component{

  state={
    post_id: '',
    comments: [],
    message: ''
  } 

  componentWillMount(){
    this.setState({post_id: this.props.post_id})
  }

  componentDidMount(){
    var self = this
    axios.get(HOST+'posts/'+this.props.post_id+'/comments',
      {
        headers: HEADERS
      }  
    )
    .then(function (res){
      self.setState({comments: res.data})
    })
    .catch(function (err){
      console.log(err)
    });
  }

  handleInput = (e) => {
    this.setState({ message: e.target.value })
  }

  commentEnter = (e) => {
    let { post_id, message } = this.state
    var self = this
    e.preventDefault();
    axios({
      method: 'post',
      url: HOST+'posts/'+post_id+'/comments',
      data: {
        message: message
      },
      headers: HEADERS
    })
    .then(function (res){
      self.setState({message: ''})
    })
    .catch(function (err){
      console.log(err)
    });
  }

  render(){
    const { message, comments } = this.state
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ul className="comment-ul" >
            { 
              comments.map(function(comment, index){
                return(
                    <li key={index}>
                      <b>{ comment.user.name }</b> { comment.message }
                    </li>
                  )
              })
            }
            </ul>
          </div>
          <div className="col-12">
            <form onSubmit={this.commentEnter} >
              <div className="form-group">
                <input type="text" className="form-control" name="message" placeholder="" value={ message } onChange={this.handleInput} />
              </div>
            </form>
          </div>
        </div>
            
      </div>
      )
  }
}
