// google api
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './FAQ.css';

class AccItem extends Component {
    render () {
        return (
            <div class="card" style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
            <div class="card-header" id="headingOne" >
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={this.props.target} aria-expanded="false" aria-controls="collapseOne">
                  {this.props.title}
                </button>
              </h2>
            </div>
            <div id={this.props.id} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                {this.props.body}
              </div>
            </div>
          </div>
            
        )
    }
}

export default AccItem;
