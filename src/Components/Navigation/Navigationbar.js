import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navigationbar.css";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";


class Navigationbar extends Component {

  constructor(props) {
    super(props)

  }

  createButtons = () => {
    if (this.props.currentSection == "Project") {
      return <NavLink onClick={() => this.handleClicks("Project")} exact to="/">Go Back</NavLink>
    } else {
      return [<NavLink activeStyle={this.handleButtonStyle("About")} onClick={() => this.handleClicks("About")} exact to="/">About</NavLink>,
    <NavLink activeStyle={this.handleButtonStyle("Projects")} onClick={() => this.handleClicks("Projects")} exact to="/">Projects</NavLink>]
    }
  }

  handleButtonStyle(button) {
    if (this.props.currentSection == button) {
      return { borderBottom: "3px solid rgb(174, 179, 181)" }
    }
  }

  handleClicks(button) {

    if (button == "About") {
      this.props.getClickFuncFromApp("section1")
    } else if (button == "Projects") {
      this.props.getClickFuncFromApp("section2")
    } else if (button == "Project") {
      this.props.updateCurrentSection("About")
    }
  }





  
  render() {

  return(
      
          <nav className="navigation">
            
            <div className="drawer_button">
              <DrawerToggleButton click={() => this.props.drawerClickHandler(!this.props.show)} />
              <p>{this.props.currentSection}</p>
            </div>
            
            <div className="navigation-items">
              {this.createButtons()}
            </div>
      
          </nav>

    );}}

export default Navigationbar;
