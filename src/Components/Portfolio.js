import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import Advensure from './Assets/Images/advensure.jpg'
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
            <h2 style={{paddingBottom:'25px'}}>PROJECTS <i className="fas fa-toolbox"></i> <i className="fas fa-screwdriver"></i></h2>
            <div style={{backgroundColor:'yellow', paddingTop:'25px', paddingBottom:'25px', border: '4px solid black', padding:'10px', borderRadius: '25px'}} className="col 6">
                    <div style={{color:'black', fontWeight: 'bold',fontSize: '25px'}}> Advensure </div>
                    <div>Create custom packing lists and/or utilize categorically-driven presets to be prepared for your next trip</div>
                    <div><a style={{color:'blue',fontWeight: 'bold'}} href = "https://github.com/bcermak/AdvenSure" target="_blank" rel="noreferrer"> Repo </a> || <a style={{color:'blue', fontWeight: 'bold'}} href = "https://advensure.herokuapp.com/" target="_blank" rel="noreferrer"> Deployed </a></div>
                    <Image style ={{marginBottom:'8px', border:'inset white'}} src={Advensure}></Image>
                    <div style={{color:'black', width:'90%', margin: '0 auto'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> MongoDB/Mongoose/Atlas, React, Material-UI, Reactstrap, Axios, Express, DayJS, Concurrently, Passport, & Bcrypt</div>
                </div>
                <br></br>
            <div style={{ backgroundColor:'#ffaea0', paddingTop:'25px', paddingBottom:'25px', border: '4px solid black', padding:'10px', borderRadius: '25px'}} className= "col 6">
              <div style={{color:'black', fontWeight: 'bold',fontSize: '25px'}}>Progressive Budget Tracker</div>
              <div>Progressive Web Application that allows users to view/edit their transactions while offline</div>
              <div><a style={{color:'blue', fontWeight: 'bold'}} href = "https://github.com/bcermak/budgettracker" target="_blank" rel="noreferrer"> Repo </a> || <a style={{color:'blue', fontWeight: 'bold'}} href = "https://budgettrackerrrr.herokuapp.com" target="_blank" rel="noreferrer"> Deployed </a></div>
              <Image style ={{marginTop:'8px', border:'inset white'}} src={ProgressiveBudget} className ="primaryPic1"></Image>
              <div style={{color:'black'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> Javascript, Node.js, Express.js, MongoDB, Mongoose, & IndexedDB </div>
            </div>
            <br></br>
            <div style={{backgroundColor:'aqua', paddingTop:'25px', paddingBottom:'25px', border: '4px solid black', padding:'10px', borderRadius: '25px'}} className= "col 6">
                <div style={{color:'black', fontWeight: 'bold', fontSize: '25px'}}> React Employee Directory </div>
                <div>Employee directory that managers can use to search/filter employee information</div>
                <div><a style={{color:'blue', fontWeight: 'bold'}} href = "https://github.com/bcermak/ReactEmployeeDirectory" rel="noreferrer" target="_blank"> Repo </a> || <a style={{color:'blue', fontWeight: 'bold'}} href = "https://user-directoryy.herokuapp.com/" rel="noreferrer" target="_blank"> Deployed </a></div>
                <Image style ={{marginTop:'8px', border:'inset white'}} src={ReactEmployeeDirectory} className ="primaryPic1"></Image>
                <div style={{color:'black'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> Javascript, React, Node.js, & Reactstrap</div>
            </div>
            <br></br>    
          </div>
            <div className ="row projects">
                <div style={{backgroundColor:'#79ffa1', paddingTop:'25px', paddingBottom:'25px', border: '4px solid black', padding:'10px', borderRadius: '25px'}} className="col 6">
                    <div style={{color:'black', fontWeight: 'bold',fontSize: '25px'}}> Weather the Weather (WTW) </div>
                    <div>Search current and forecasted weather conditions for a given city </div>
                    <div><a style={{color:'blue', fontWeight: 'bold'}} href = "https://github.com/bcermak/Weather-Dashboard" rel="noreferrer" target="_blank"> Repo </a> || <a style={{color:'blue', fontWeight: 'bold'}} href = "https://weather-the-weather-3e172.web.app/" rel="noreferrer" target="_blank"> Deployed </a></div>
                    <Image style ={{marginBottom:'8px', border:'inset white'}} src={WeatherApp} className ="primaryPic1"></Image>
                    <div style={{color:'black'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> HTML, CSS, Javascript, & JQuery</div>
                </div>
                <br></br>
                <div style={{backgroundColor:'#e9b0ff', paddingTop:'25px', paddingBottom:'25px', border: '4px solid black', padding:'10px', borderRadius: '25px'}} className="col 6">
                    <div style={{color:'black', fontWeight: 'bold',fontSize: '25px'}}> BrewsNDadJokes </div>
                    <div>Local brewery listings with a side of laughs</div>
                    <div><a style={{color:'blue', fontWeight: 'bold'}} href = "https://github.com/bcermak/BrewsNDadJokes" rel="noreferrer" target="_blank"> Repo </a> || <a style={{color:'blue', fontWeight: 'bold'}} href = "https://brewsndadjokes.web.app" rel="noreferrer" target="_blank"> Deployed </a></div>
                    <Image style ={{ marginBottom:'8px', border:'inset white'}} src={BrewsNDadJokes} className ="primaryPic1"></Image>
                    <div style={{color:'black'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> Javascript, JQuery, Materialize, & APIs </div>
                </div>
                <br></br>
            </div>
            <div id = "projectsBottom" className ="row projects">
                <div style={{backgroundColor:'#eaff71', paddingTop:'25px', paddingBottom:'25px', border: '4px solid black', padding:'10px', borderRadius: '25px'}} className= "col 6">
                    <div style={{color:'black', fontWeight: 'bold',fontSize: '25px'}}>Team Profiles Generator (CLI) </div>
                    <div>Command-line interface that generates a "Team Profile" HTML-page</div>
                    <div><a style={{color:'blue', fontWeight: 'bold'}} href = "https://github.com/bcermak/Team-Profiles" rel="noreferrer" target="_blank"> Repo </a></div>
                    <Image style ={{marginBottom:'8px', border:'inset white'}} src={TeamProfiles} className ="primaryPic1"></Image>
                    <div style={{color:'black'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> Javascript, Node.js, Inquirer, & FS </div>
                </div>
            </div>
          </div>  
      </section>
    );
  }
}

export default Portfolio;
