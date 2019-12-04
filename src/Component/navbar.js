import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                 <div className="container">    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#">ZALORA</a>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                            <a class="nav-link" href="#">WANITA <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                            <a class="nav-link" href="#">PRIA <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                            <a class="nav-link" href="#">ANAK-ANAK <span class="badge badge-success">NEW</span></a>
                            </li>
                        </ul>
                        <form class="form-inline ">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;