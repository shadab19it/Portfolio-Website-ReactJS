import React, { Component } from "react";
import "./LinkButton.css";

class LinkButton extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <a href={this.props.link}>
            <div id="link-button">
                
                <img src={this.props.linkImage}></img>
        
            </div>
        </a>
    
    )        
  }
};


export default LinkButton;