import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";


class Navbar extends Component {
    render () {
        return (
            <nav class="navbar fixed-top navbar-light" style={{backgroundColor: "#76b074"}}>
            <div class="container-fluid">
                <ul class="navbar-nav">                  
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#bikemap">Bike Route Map</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#faqs">FAQs</a>
                  </li>
                </ul>
            </div>
          </nav>
        )
    }
}

export default Navbar;