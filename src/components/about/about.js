import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

class About extends Component {
    render () {
        return (
            <div id="about" className="about">
                <section class="about_content"> 
                    <h2> About <a id="about_link"></a> 
                    </h2>
                    <p>
                        <h4 class="paragraphs"> About the info of bikes </h4>
                        This is just a simple test as to whether this shows as a paragraph
                        within the text box, hopefully it does and does not break out of it.
                    </p>

                </section>
            </div>
        )
    }
}

export default About;