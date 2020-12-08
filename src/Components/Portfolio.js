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
        <div className= "col 6">
            <div style={{fontWeight: 'bold',fontSize: 'larger'}}>Progressive Budget Tracker</div>
            <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/budgettracker"> GitHub </a> || <a style={{fontWeight: 'bold'}} href = "https://budgettrackerrrr.herokuapp.com"> Deployed </a></div>
            <Image style ={{marginTop:'8px',border:'solid black'}} src={ProgressiveBudget} className ="primaryPic1"></Image>
        </div>
        <div className= "col 6">
            <div style={{fontWeight: 'bold',fontSize: 'larger', marginBottom:'8px'}}> React Employee Directory </div>
            <Image style ={{border:'solid black'}} src={ReactEmployeeDirectory} className ="primaryPic1"></Image>
            <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/ReactEmployeeDirectory"> GitHub </a> || <a style={{fontWeight: 'bold'}} href = "https://user-directoryy.herokuapp.com/"> Deployed </a></div>
        </div>    
    </div>
    <div className ="row projects">
        <div className="col-md-6">
            <div style={{fontWeight: 'bold',fontSize: 'larger', marginBottom:'8px'}}> Weather the Weather (WTW) </div>
            <Image style ={{border:'solid black'}} src={WeatherApp} className ="primaryPic1"></Image>
            <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/Weather-Dashboard"> GitHub </a> || <a style={{ fontWeight: 'bold'}} href = "https://bcermak.github.io/Weather-Dashboard/"> Weather Dashboard </a></div>
        </div>
        <div className="col-md-6">
            <div style={{fontWeight: 'bold',fontSize: 'larger', marginBottom:'8px'}}> BrewsNDadJokes </div>
            <Image style ={{border:'solid black'}} src={BrewsNDadJokes} className ="primaryPic1"></Image>
            <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/BrewsNDadJokes"> GitHub </a> || <a style={{fontWeight: 'bold'}} href = "https://bcermak.github.io/BrewsNDadJokes/"> Deployed </a></div>
        </div>
    </div>
    <div id = "projectsBottom" className ="row projects">
        <div className= "col-md-6">
            <div style={{fontWeight: 'bold',fontSize: 'larger', marginBottom:'8px'}}>Team Profiles Generator (CLI) </div>
            <Image style ={{border:'solid black'}} src={TeamProfiles} className ="primaryPic1"></Image>
            <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/Team-Profiles"> GitHub </a></div>
        </div>  
        <div className="col-md-6">
            <div style={{fontWeight: 'bold',fontSize: 'larger', marginBottom:'8px'}}> Keep Austin Social </div>
            <Image style ={{border:'solid black'}} src={KeepAustinSocial}></Image>
            <div><a style={{fontWeight: 'bold'}} href = "https://github.com/bcermak/KeepAustinSocial"> GitHub </a> || <a style={{fontWeight: 'bold'}} href = "https://keepaustinsocial.herokuapp.com/"> Deployed </a></div>
        </div>
    </div>
    
    </div>  
      </section>
    );
  }
}

export default Portfolio;
