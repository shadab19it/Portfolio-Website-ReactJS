import React, { Component } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";




class Projects extends Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        //Set currentSection label to "Projects".
        this.props.updateCurrentSectionInHome("Projects")
    }

 
    render() {

        var listOfProjects = this.props.dataFromHome

        function createProjectLinks() {

            const Links = [];
            var projectID, projectTitle, projectLogo = "";
        
            for (const project in listOfProjects) {

                projectTitle = listOfProjects[project].Title;
                projectID = listOfProjects[project].ID;
                projectLogo = listOfProjects[project].Images[0];
            
                Links.push(<div id="project_button"><Link to={"/project" + projectID}> <div id="project_button_logo"> <img src={projectLogo} /> </div> <h1>{projectTitle}</h1> </Link></div>);
                    
            }

            //Filler Buttons
            Links.push(<div id="project_button_ghost"> <div id=""> <img src={""} /> </div> <h1>{" "}</h1></div>);
            Links.push(<div id="project_button_ghost"> <div id=""> <img src={""} /> </div> <h1>{" "}</h1></div>);
            Links.push(<div id="project_button_ghost"> <div id=""> <img src={""} /> </div> <h1>{" "}</h1></div>);   
        
            return Links
        }

            
    return (

        <div id="projects_content">
            {createProjectLinks()}
        </div>
    );
    }
}

export default Projects;