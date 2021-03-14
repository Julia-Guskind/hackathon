import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

class About extends Component {
    render () {
        return (
            <div className="about">
                <section class="about_content"> 
                    <h2> About: <a id="about_link"></a></h2>
                    <p>
                        <h4 class="paragraphs"> Who can use Husky Zoom Bikes? </h4>
                        Anyone! UConn students with a Husky One card can directly link their card funds 
                        (points or huskybucks) to Husky Zoom. Any resident can also put money 
                        on a Husky Zoom card to use to lock and unlock the bike. 
                        This card works similar to a credit card. No cash accepted, 
                        since there is no way to track how long the bike was taken out for. 
                        {/* <br>
                        <br>
                        <br>
                        <h4 class="paragraphs"> How much are Husky Zoom bikes to use?</h4> */}

                    </p>

                </section>
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