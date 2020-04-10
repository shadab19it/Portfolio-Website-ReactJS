import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./Smaller_Components/ScrollToTop"

import {DataManager} from "../Data/DataManager.js"
import "./App.css";

import Navigationbar from "./Navigation/Navigationbar";
import SideDrawer from "./Navigation/SideDrawer/SideDrawer";

import Home from "./Content/Main/Home";
import Project from "./Content/Projects/Project";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        sideDrawerOpen: false,
        currentSection: "",
        tempfunc: null
    };
  }





  //Update currentSection.
  updateCurrentSection = (selectedSection) => {
    if (selectedSection != this.state.currentSection) {
      this.setState({
        currentSection: selectedSection
      });
    }
  }



  //Updates the "open"/"close" state of sidemenu.
  //Changes when button click in Navigationbar.
  sideMenuHandler = (drawerState) => {
    this.setState({
      sideDrawerOpen: drawerState
    });
  }


  //Getting function from Home and storing as state.
  getClickFuncFromHome = (func) => {
    this.setState({ tempfunc: func });
  }



  

    
  //Create Page Routing
  createRoutes = () => {

    var data = DataManager()
    var projects = data[1]
    var projectPaths = []

    for (const project in projects) {

      if (projects.hasOwnProperty(project)) {
      
        projectPaths["/project" + projects[project].ID] = projects[project]
      
      }
    }

    var myRoutes = []
    for (const i in projectPaths) {

      if (projectPaths.hasOwnProperty(i)) {

        myRoutes.push(<Route exact path={i} render={(props) => <Project {...props} currentSection={this.state.currentSection} updateCurrentSection={this.updateCurrentSection} dataFromApp={projectPaths[i]} />} />)
      
      }
    }
    return myRoutes
  }


  render() {

    var data = DataManager()

    return (
      <HashRouter>
        <ScrollToTop />
        <div id="webpage">
          
          <div id="page-header">
            <Navigationbar show={this.state.sideDrawerOpen} drawerClickHandler={this.sideMenuHandler} updateCurrentSection={this.updateCurrentSection} currentSection={this.state.currentSection} getClickFuncFromApp={this.state.tempfunc}/>
            <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler={this.sideMenuHandler} updateCurrentSection={this.updateCurrentSection} />

          </div>

          <div id="page-content">
 
            <Switch >
              <Route exact path={["/", "/projects"]} render={(props) => <Home {...props} currentSection={this.state.currentSection} updateCurrentSection={this.updateCurrentSection} sendClickFuncToApp={this.getClickFuncFromHome} dataFromApp={data} />} />
              {this.createRoutes()}
            </Switch>

          </div>

          <div id="page-footer"></div>    

        </div>
      </HashRouter>
     );
  }
}
export default App;




