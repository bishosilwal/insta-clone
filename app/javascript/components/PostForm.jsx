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
      self.setState({status: '', attachment: []})
      self.refs['file-input'].value = ''
      self.props.fetchData()

    })
    .catch(function (errors){
       console.log(errors) 
    });
  }

  render(){
    var state = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Status</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" value={state.status} rows="3" name="status" onChange={this.handleInput}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">File:</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1" ref="file-input"  multiple onChange={this.handleFileInput}/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">post</button>
        </div>
      </form>
      )
  }
}