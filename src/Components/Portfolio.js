import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import KeepAustinSocial from './Assets/Images/keepaustinsocial.jpg'
import BrewsNDadJokes from './Assets/Images/brewsndadjokes.jpg'
import TeamProfiles from './Assets/Images/teamprofiles.jpg'
import WeatherApp from './Assets/Images/weatherapp.jpg'
import ReactEmployeeDirectory from './Assets/Images/reactempdir.jpg'
import ProgressiveBudget from './Assets/Images/budgettracker.jpg'


class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div style={{display: 'block'}}className= "container">
          <div className ="row projects">
            <h2 style={{paddingBottom:'25px'}}>PROJECTS <i class="fas fa-toolbox"></i> <i class="fas fa-screwdriver"></i></h2>
            <div className= "col 6">
                <div style={{fontWeight: 'bold',fontSize: '25px'}}>Progressive Budget Tracker</div>
                <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/budgettracker"> GitHub </a> || <a style={{fontWeight: 'bold'}} href = "https://budgettrackerrrr.herokuapp.com"> Deployed </a></div>
                <Image style ={{marginTop:'8px', border:'solid black'}} src={ProgressiveBudget} className ="primaryPic1"></Image>
            </div>
            <div className= "col 6">
                <div style={{fontWeight: 'bold', fontSize: '25px'}}> React Employee Directory </div>
                <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/ReactEmployeeDirectory"> GitHub </a> || <a style={{fontWeight: 'bold'}} href = "https://user-directoryy.herokuapp.com/"> Deployed </a></div>
                <Image style ={{marginTop:'8px', border:'solid black'}} src={ReactEmployeeDirectory} className ="primaryPic1"></Image>
            </div>    
          </div>
            <div className ="row projects">
                <div className="col 6">
                    <div style={{fontWeight: 'bold',fontSize: '25px'}}> Weather the Weather (WTW) </div>
                    <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/Weather-Dashboard"> GitHub </a> || <a style={{ fontWeight: 'bold'}} href = "https://bcermak.github.io/Weather-Dashboard/"> Weather Dashboard </a></div>
                    <Image style ={{marginBottom:'8px', border:'solid black'}} src={WeatherApp} className ="primaryPic1"></Image>
                </div>
                <div className="col 6">
                    <div style={{fontWeight: 'bold',fontSize: '25px'}}> BrewsNDadJokes </div>
                    <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/BrewsNDadJokes"> GitHub </a> || <a style={{fontWeight: 'bold'}} href = "https://bcermak.github.io/BrewsNDadJokes/"> Deployed </a></div>
                    <Image style ={{ marginBottom:'8px', border:'solid black'}} src={BrewsNDadJokes} className ="primaryPic1"></Image>
                </div>
            </div>
            <div id = "projectsBottom" className ="row projects">
                <div className= "col 6">
                    <div style={{fontWeight: 'bold',fontSize: '25px'}}>Team Profiles Generator (CLI) </div>
                    <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/Team-Profiles"> GitHub </a></div>
                    <Image style ={{marginBottom:'8px', border:'solid black'}} src={TeamProfiles} className ="primaryPic1"></Image>
                </div>  
                <div className="col 6">
                    <div style={{fontWeight: 'bold',fontSize: '25px'}}> Keep Austin Social </div>
                    <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/KeepAustinSocial"> GitHub </a> || <a style={{fontWeight: 'bold'}} href = "https://keepaustinsocial.herokuapp.com/"> Deployed </a></div>
                    <Image style ={{marginBottom:'8px', border:'solid black'}} src={KeepAustinSocial}></Image>
                </div>
            </div>
          </div>  
      </section>
    );
  }
}

export default Portfolio;
