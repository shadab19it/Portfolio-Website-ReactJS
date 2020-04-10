import React, { Component } from "react";
import "./ContentContainer.css";

class ContentContainer extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
       <div id="content-container" ref={this.props.refa}>
          <h1 id="title">{this.props.title}</h1>
          <div id="inner-div">
            {this.props.content}
           </div>
       </div>
    )        
  }
};


export default ContentContainer;