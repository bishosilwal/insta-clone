import React, { Component } from 'react'


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
                <h4> { post.user.name } </h4>
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
              { post.status } 
            </div>
          </div>
        </div>
      )
  }
}