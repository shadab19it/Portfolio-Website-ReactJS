import React, { Component } from "react";

import "./Project.css";
import ProjectHeader from "./Sub_Components/Project_Header/ProjectHeader"
import ContentContainer from "../../Smaller_Components/View_Content/ContentContainer"


class Project extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
    //Set currentSection label to "Project".
    this.props.updateCurrentSection("Project")
  
  }
  


  render() {

    //LOAD DATA FROM PROPS
    var ProjectTitle = this.props.dataFromApp.Title
    var ProjectLogo = this.props.dataFromApp.Images[0]
    var ProjectDescription = this.props.dataFromApp.Description
    var ProjectImages = this.props.dataFromApp.Images
    var ProjectLinks = this.props.dataFromApp.Links
    var ProjectDetails = this.props.dataFromApp.Details


    ProjectDescription = ProjectDescription.split('\n').map((item, key) => {
      return <span key={key}>{item}<br/></span>
    })

    return (
      <div id="project-page">
        <ProjectHeader project_title={ProjectTitle} project_logo={ProjectLogo} />
        <ContentContainer title="Description" content={<p>{ProjectDescription}</p>}/>

        <ContentContainer title="Preview" content={<div id="project-content-image-container"> {getProjectImages(ProjectImages)}</div>}/>
        <ContentContainer title="Links" content={<ul>{getLinks(ProjectLinks)}</ul>}/>
        <ContentContainer title="Details" content={<ul>{getDetails(ProjectDetails)}</ul>}/>
      </div>
)}};

export default Project;


//DATA MANAGERS ------>


//Get Project Preview Images
function getProjectImages(images) {

  var list = []

  for (let i = 1; i < images.length; i++) {
      
    list.push(<img src={images[i]} />)

  }
    
  return list;
}

//Get Project Links
function getLinks(links) {

  var items = []

  for (const i in links) {

    if (links[i] != "") {

      items.push(<li><a href={links[i]}>{i}</a></li>)
    
    }
  }
  return items
}

//Get Project Details
function getDetails(data) {

  var items = []

  for (const i in data) {

    if (data[i] != "") {

      items.push(<li><p><b>{i}: </b>{data[i]}</p></li>)
    
    }
  }
  return items
}