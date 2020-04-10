import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css"

const sideDrawer = props => {

  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }



  function handleClicks(section) {
    props.updateCurrentSection(section)
    props.drawerClickHandler(!props.show)
  }




  return ( 
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link onClick={() => handleClicks("About")}  to="/">About</Link>
        </li>
        <li>
          <Link onClick={() => handleClicks("Projects")}  to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  )
};

export default sideDrawer;
