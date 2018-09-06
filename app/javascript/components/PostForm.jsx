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
      self.props.fetchData()

    })
    .catch(function (errors){
       console.log(errors) 
    });
  }
  attachmentName(){
    const {attachment} = this.state
    if(attachment.length>0){
      if(attachment.length==1){
        return ''+attachment[0].name
      }
      if(attachment.length>1){
        return attachment.length+" files selected"
      }
    }else{
      return 'Choose files'
    }
  }

  render(){
    var state = this.state
    return(
      <form onSubmit={this.handleSubmit} className="mt-4">
        <div style={{border: '1px solid #ced4da'}} className="mb-2">
          <div className="form-group m-0">
            <textarea  placeholder="  status" className="p-0" value={state.status} rows="3" name="status" onChange={this.handleInput} style={{ width: '100%'}}></textarea>
          </div>
          <div className="form-group m-0">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile"   multiple onChange={this.handleFileInput} accept="image/*,video/*"/>
              <label className="custom-file-label" htmlFor="customFile">{ this.attachmentName()}</label>
            </div>
          </div>
        </div>  
        <div className="form-group">
          <button type="submit" className="btn btn-default">post</button>
        </div>
      </form>
      )
  }
}