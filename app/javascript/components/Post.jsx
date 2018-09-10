import React, { Component } from 'react'
import Comment from './Comment.jsx'
import Like from './Like.jsx'


const HOST = 'http://localhost:3000/'
export default class Post extends Component{


  componentDidMount(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  
  render(){
    const post = this.props.value
    return(
        <div className="container-fluid mt-5">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <img src={post.user.avatar} height="25" width="25" style={{borderRadius: '15px'}}/>&nbsp;<h4> { post.user.name } </h4>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title"></h5>

              <div className="swiper-container">
                <div className="swiper-wrapper">
                  { 
                    post.attachments.map(function(attachment,index){
                      if(attachment.asset_content_type.search('image')==0){
                        return(
                            <div className="swiper-slide" key={index}>
                              <img className="d-block w-100" src={HOST+attachment.asset} width="400px" height="400px" key={index}/> 
                            </div>
                          )  
                      }else if(attachment.asset_content_type.search('video')==0){

                        return(
                          <div className="swiper-slide" key={index}>
                            <video  controls key={index} src={ HOST+attachment.asset} width="400px" height="400px" className="embed-responsive embed-responsive-16by9 embed-responsive-item" ></video>
                          </div>  
                          )
                      }
                    })
                  }
                </div>
                {/*<!-- Add Pagination -->*/}
                <div className="swiper-pagination"></div>
                {/*<!-- Add Arrows -->*/}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-4">
                  <div className="d-flex flex-row" >  
                    <Like post_id={ post.id } /> <i className="far fa-comment" > </i>
                  </div>
                </div>  
                <div className="col-12">
                  <b>{ post.user.name }</b> { post.status } 
                </div>
                <div className="col-12">
                  <Comment post_id={post.id}/>
                </div> 
              </div>   
            </div>
          </div>
        </div>
      )
  }
}