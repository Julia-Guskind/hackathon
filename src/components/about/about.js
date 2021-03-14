import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

class About extends Component {
    render () {
        return (
            <div class="card mb-3" style={{borderRadius:"25px", position:"relative", maxWidth: "1300px", height:"100%", margin:"auto"}} id="about">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="bike.jpeg" style={{width:"100%", borderRadius:"25px 0px 0px 25px"}} alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">What is Husky Zoom?</h5>
                  <p class="card-text">
                  Husky Zoom is a local bike sharing service for UConn, Storrs, and the surrounding community. 
                  It provides easy access for students, professors, and residents to travel around the area. 
                  Stations, or docks, are spaced out from off campus apartments in Willington to East Brook Mall in Mansfield. 
                  Many stations are on the UConn campus to allow easy travel across campus for students! 
                  Students can quickly access Storrs center, their friends or homes off campus, and local businesses and restaurants.
                  </p>
                  <p class="card-text"><small class="text-muted">Image Source: https://uconnoep.files.wordpress.com/2015/11/bike-rack.jpg?w=688&h=516</small></p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default About;
 

/*
<p>
                        <h4 class="paragraphs"> About the info of bikes </h4>
                        This is just a simple test as to whether this shows as a paragraph
                        within the text box, hopefully it does and does not break out of it.
                    </p>
*/