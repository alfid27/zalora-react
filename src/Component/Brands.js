import React, { Component } from 'react';

class Brands extends Component {
    render() {
        return (
            <div className="container">
                <h2 className=" mt-5 text-center"> Featured Brands</h2>
                <div className="row mt-5">    
                        <div className="col-md-2">
                            <img src={require("../image/casio.jpg")}/>
                        </div>
                        <div className="col-md-2">
                            <img src={require("../image/adidas.png")}/>
                        </div>
                        <div className="col-md-2">
                            <img src={require("../image/nike.jpg")}/>
                        </div>
                        <div className="col-md-2">
                            <img src={require("../image/casio.jpg")}/>
                        </div>
                        <div className="col-md-2">
                            <img src={require("../image/casio.jpg")}/>
                        </div>
                        <div className="col-md-2">
                            <img src={require("../image/casio.jpg")}/>
                        </div>
                        <div className="col-md-2">
                            <img src={require("../image/adidas.png")}/>
                        </div>
                        <div className="col-md-2">
                            <img src={require("../image/nike.jpg")}/>
                        </div>
                        <div className="col-md-2">
                            <img src={require("../image/adidas.png")}/>
                        </div>
                        <div className="col-md-2">
                            <img src={require("../image/nike.jpg")}/>
                        </div>
                        <div className="col-md-2">
                            <img src={require("../image/adidas.png")}/>
                        </div>
                        <div className="col-md-2">
                            <img src={require("../image/nike.jpg")}/>
                        </div>
                </div>

                <h2 className=" mt-5 text-center">New This Week </h2>
                <div className="row mt-5 mx-4">
                    <div className="card col-md-4">
                            <img src={require("../image/HOMEPAGE_KEMEJADIBAWAH249_MEN.jpg")}/>
                            <h5 className="text-center mt-2">Zalora</h5>
                            <p className="text-center">New Arrival</p>
                    </div>
                    <div className="card col-md-4">
                            <img src={require("../image/HOMEPAGE_ALLUNDER188K_WOMEN.jpg")}/>
                            <h5 className="text-center mt-2">Zalora</h5>
                            <p className="text-center">New Arrival</p>
                    </div>
                    <div className="card col-md-4">
                            <img src={require("../image/promo-women.jpg")}/>
                            <h5 className="text-center mt-2">Zalora</h5>
                            <p className="text-center">New Arrival</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Brands;