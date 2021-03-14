import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";


class Navbar extends Component {
    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Back to Top</a>
                <ul class="navbar-nav">                  
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#about_link">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#bikemap">Bike Route Map</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#sustain">Sustainability</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#FAQ">FAQs</a>
                  </li>
                </ul>
            </div>
          </nav>
        )
    }
}

export default Navbar;