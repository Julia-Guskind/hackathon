// google api
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQ.css';

class AccItem extends Component {
    render () {
        return (
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {this.props.title}
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    {this.props.body}
                </div>
                </div>
            </div>  
        )
    }
}

export default AccItem;
