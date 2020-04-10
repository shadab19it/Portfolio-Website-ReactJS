import React, {Component} from "react";
import "./ProjectHeader.css";


class ProjectHeader extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return(

            <div id="project-page-header">
                <div id="header-image-container">
                    <img id="project_logo" src={this.props.project_logo} />
                </div>
                <h1>{this.props.project_title}</h1>
            </div>

        )
    }
}
export default ProjectHeader;