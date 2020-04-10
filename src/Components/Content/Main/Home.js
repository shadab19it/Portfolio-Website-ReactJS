import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./Home.css";



import About from "./Sub_Components/About/About"
import Projects from "./Sub_Components/Projects/Projects"



class Home extends Component {
  constructor(props) {
    super(props)
    this.section1 = React.createRef()
    this.section2 = React.createRef()

    this.state = {
      isDesktop: false,
      currentScrollPosition: 0,
    };

    this.checkPageUI = this.checkPageUI.bind(this);
    this.listenToScroll = this.trackScrolling.bind(this);

  }


  
    


  //Listens for changes in Viewport Width, to selectively render elements.
  componentDidMount() {
    
    this.checkPageUI();
    window.addEventListener("resize", this.checkPageUI);
    window.addEventListener("scroll", this.trackScrolling);
    this.props.sendClickFuncToApp(this.changeSection);

  }

  //Removes listener for change in Viewport Width.
  componentWillUnmount() {
    window.removeEventListener("resize", this.checkPageUI);
    window.removeEventListener('scroll', this.trackScrolling);
  }

  //Updates State of isDesktop.
  checkPageUI() {
    this.setState({ isDesktop: window.innerWidth > 766 });
  }

  
  //MOB ONLY: 
  transferCurrentSectionFromHomeToApp = (selectedSection) => {
    if (!this.state.isDesktop) {
      this.props.updateCurrentSection(selectedSection)
    }
  }

  //DESKTOP ONLY: Tracks Scrolling, and Updates CurrentSection.
  trackScrolling = () => {
    
    if (this.state.isDesktop) {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.state.currentScrollPosition = (winScroll / height) * 100 ;

      //Updates CurrentSection and URL.
      if (this.state.currentScrollPosition < 50) {
        this.props.updateCurrentSection("About")
      } else if (this.state.currentScrollPosition > 50) {
        this.props.updateCurrentSection("Projects")
      }
    }
  }

  

  //DESKTOP ONLY: Function used in navigation menu. 
  changeSection = (selectedSection) => {
    if(selectedSection == "section1") {
      this.section1.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }else if (selectedSection == "section2") {
      this.section2.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }



 

  render() {

    //LOAD DATA FROM APP
    var profileData = this.props.dataFromApp[0]
    var projectsData = this.props.dataFromApp[1]



    let page;

  
      //IF DEVICE WIDTH == LAPTOP WIDTH
      if (this.state.isDesktop) {
      
        page = 
        <Switch>
          <Route exact path={["/", "/projects"]}>

            <div id="homepage_section1" ref={this.section1}>
              <div id="homepage_about">
                <About updateCurrentSectionInHome={this.transferCurrentSectionFromHomeToApp} dataFromHome={profileData} />
              </div>
            </div>

            <div id="homepage_section2" ref={this.section2}>
              <div id="homepage_projects">
                <h1>Projects</h1>
                <div id="homepage_projects_container">
                  <Projects updateCurrentSectionInHome={this.transferCurrentSectionFromHomeToApp} dataFromHome={projectsData}  />
                </div>
              </div>
            </div>
          </Route>

        </Switch>

      //IF DEVICE WIDTH == MOBILE WIDTH
      } else {
        
        page = 
          <Switch>
            <Route exact path="/">
              <div id="mobile_page_about">
                <About updateCurrentSectionInHome={this.transferCurrentSectionFromHomeToApp} dataFromHome={profileData} />
              </div>
            </Route>
            <Route path="/projects">
              <div id="mobile_page_projects">
                <Projects updateCurrentSectionInHome={this.transferCurrentSectionFromHomeToApp} dataFromHome={projectsData} />
              </div>
            </Route>
          </Switch>
      }
    



    return (
    
      <div id="homepage">
        {page}
        
      </div>

    )
    }
  };

export default Home;