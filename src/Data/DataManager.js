//IMPORT JSON DATASET
import data from "./datafile.json"

//IMPORT IMAGES
import profileImage from "./Assets/profile.png";
import linkedInLogo from "./Assets/linkedin.png";
import githublogo from "./Assets/github.png";
import defaultLogo from "./Assets/unfinishedproject.png";
import project1Logo from "./Assets/Project1/letterquiz.png";
import project1Img1 from "./Assets/Project1/letterquiz01.png";
import project1Img2 from "./Assets/Project1/letterquiz03.png";
import project1Img3 from "./Assets/Project1/letterquiz04.png";
import project2Logo from "./Assets/Project2/websiteicon.png";
import project3Logo from "./Assets/Project3/websiteicon2.png";
import project4Logo from "./Assets/Project4/calendarlogo.png";



//CREATE DATA OBJECTS
export const DataManager = () => {

    //Profile
    var profile = data.Personalia
    profile.Images = [profileImage, linkedInLogo, githublogo]

    //Project 1
    var project1 = data.Projects.Project1
    project1.Images = [project1Logo, project1Img1, project1Img2, project1Img3]

    //Project 2
    var project2 = data.Projects.Project2
    project2.Images = [project2Logo]

    //Project 3
    var project3 = data.Projects.Project3
    project3.Images = [project3Logo]

    //Project 4
    var project4 = data.Projects.Project4
    project4.Images = [project4Logo]

    //Project 5
    var project5 = data.Projects.Project5
    project5.Images = [defaultLogo]

    //PreparedData
    var projects = [project1, project2, project3, project4, project5]
    var preparedData = [profile, projects]

    return preparedData
}