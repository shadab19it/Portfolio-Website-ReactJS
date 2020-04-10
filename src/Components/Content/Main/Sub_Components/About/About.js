import React, {Component} from "react";
import "./About.css";
import LinkButton from "../../../../Smaller_Components/Button_Link/LinkButton"



class About extends Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //Set currentSection label to "About".
        this.props.updateCurrentSectionInHome("About")
    }

    render() {
        
        //DATA GETTERS:
        var Name = this.props.dataFromHome.Name
        var Bio1 = this.props.dataFromHome.Bio
        var Bio2 = this.props.dataFromHome.Bio2
        var ProfileImage = this.props.dataFromHome.Images[0]
        var LinkedInImage = this.props.dataFromHome.Images[1]
        var GitHubImage = this.props.dataFromHome.Images[2]
        var LinkedInLink = this.props.dataFromHome.Contact.LinkedIn
        var GitHubLink = this.props.dataFromHome.Contact.GitHub
        var MailLink = this.props.dataFromHome.Contact.Mail

        return(
            <div id="about_container">

                <div id="section1">
                    <div id="card_image_container">
                        <img src={ProfileImage}/>
                    </div>
                    <h1>{Name}</h1>
                    <p>{Bio1} <br/> {Bio2}</p>
                </div>

                <div id="section2">
                    <LinkButton linkImage={LinkedInImage} link={LinkedInLink} />
                    <LinkButton linkImage={GitHubImage} link={GitHubLink} />
                    <LinkButton linkImage={"https://img.icons8.com/dotty/80/000000/filled-sent.png"} link={MailLink} />
                </div>

            </div>
 

        )
    }
}
export default About;