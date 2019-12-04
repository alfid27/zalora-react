import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="container">
                <h2>Content</h2>
                
                   <div className="col-11 text-center"> 
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={require("../image/banner.gif")} class="d-block w-60" alt="..."/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div> 
                  </div> 
                  <div className="col-md-11"> 
                    <div className="badge badge-dark col-md-12"><h5>Conten</h5></div>
                  </div>

                  <div className="col-md-11 text-center mt-5">
                      <img className="col-md-12" src={require("../image/banner2.jpg")}/>
                  </div>
            </div>
        );
    }
}

export default Content;