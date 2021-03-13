import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";


class Navbar extends Component {
    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#about_link">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#rent">Rent Bike</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#sustain">Sustainability</a>
                  </li>
                </ul>
            </div>
          </nav>
        )
    }
}

export default Navbar;