import React, { Component } from 'react'
import axios from 'axios'

const HOST = 'http://localhost:3000/api/v1/'
const HEADERS =  JSON.parse(window.localStorage.getItem('headers'))

export default class PostForm extends Component{

  state={
    status:'',
    attachment: []
  }

  handleInput = (e) => {
    this.setState({status: e.target.value})
  }

  handleFileInput = (e) => {
    this.setState({attachment: e.target.files})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    let state = this.state
    // HEADERS['content-type'] = 'multipart/form-data'
    console.log(HEADERS)
    let formData = new FormData()
    formData.append('status', state.status)
    for(var file in state.attachment){
      formData.append('attachment[]', state.attachment[file])
    }
    var self = this
    axios({
      method: 'post',
      url: HOST+'posts',
      data: formData,
      headers: {
        ...HEADERS
      },
      contentType: "multipart/form-data"
    }).then(function (response){
      console.log(response)
      self.props.fetchData()

    })
    .catch(function (errors){
       console.log(errors) 
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Status</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="status" onChange={this.handleInput}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">File:</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1" multiple onChange={this.handleFileInput}/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">post</button>
        </div>
      </form>
      )
  }
}