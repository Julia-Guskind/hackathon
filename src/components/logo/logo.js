// google api
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './logo.css';

class Logo extends Component {
    render () {
        return (
            <div id="logo" className="logo">
                <a href="/">
                <img className="img" src="huskyzoom.png"/>  
                </a>     
            </div>
          
        )
    }
}

export default Logo;