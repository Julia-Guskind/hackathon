import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sustain.css';

class Sustain extends Component {
    render () {
        return (
            <div class="card mb-3" style={{borderRadius:"25px", position:"relative", maxWidth: "1300px", height:"100%", margin:"auto"}} id="sus">
                <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">How does Husky Zoom contribute to sustainability?</h5>
                    <p class="card-text">
                        Husky Zoom is a clean transportation option for the Storrs community! 
                        Cars implant a huge carbon footprint on this planet, 
                        and bike sharing will encourage people to skip the car, 
                        reduce traffic on the road, lower CO2 emissions, and get some exercise while having fun. 
                        Go on leisurely social group rides, a destressing zoom across campus after an exam, 
                        or explore everything the area has to offer. 
                        By choosing Husky Zoom, you’re helping combat carbon emissions and climate change and 
                        making a positive impact- be proud!
                    </p>
                    <p class="card-text"><small class="text-muted">Image Source: https://park.uconn.edu/wp-content/uploads/sites/2304/2018/09/Aerial131009b010-700x300.jpg</small></p>

                    </div>
                </div>
                <div class="col-md-4">
                    <img margin="auto" height="100%" src="cars.jpg" alt="..."/>
                </div>
                </div>
          </div>
        )
    }
}

export default Sustain;