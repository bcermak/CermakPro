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
            <div style={{ backgroundColor:' #ff7f68', paddingTop:'25px', paddingBottom:'25px'}} className= "col 6">
              <div style={{color:'black', fontWeight: 'bold',fontSize: '25px'}}>Progressive Budget Tracker</div>
              <div><a style={{color:'blue', fontWeight: 'bold'}} href = "https://github.com/bcermak/budgettracker"> Repo </a> || <a style={{color:'blue', fontWeight: 'bold'}} href = "https://budgettrackerrrr.herokuapp.com"> Deployed </a></div>
              <Image style ={{marginTop:'8px', border:'solid black'}} src={ProgressiveBudget} className ="primaryPic1"></Image>
              <div style={{color:'black'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> HTML, CSS, Javascript, Node.js, Express.js, MongoDB, Mongoose, IndexedDB </div>
            </div>
            <br></br>
            <div style={{backgroundColor:'aqua', paddingTop:'25px', paddingBottom:'25px'}} className= "col 6">
                <div style={{color:'black', fontWeight: 'bold', fontSize: '25px'}}> React Employee Directory </div>
                <div><a style={{color:'blue', fontWeight: 'bold'}} href = "https://github.com/bcermak/ReactEmployeeDirectory"> Repo </a> || <a style={{color:'blue', fontWeight: 'bold'}} href = "https://user-directoryy.herokuapp.com/"> Deployed </a></div>
                <Image style ={{marginTop:'8px', border:'solid black'}} src={ReactEmployeeDirectory} className ="primaryPic1"></Image>
                <div style={{color:'black'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> HTML, CSS, Javascript, React.js, Node.js, Reactstrap</div>
            </div>
            <br></br>    
          </div>
            <div className ="row projects">
                <div style={{backgroundColor:'#79ffa1', paddingTop:'25px', paddingBottom:'25px'}} className="col 6">
                    <div style={{color:'black', fontWeight: 'bold',fontSize: '25px'}}> Weather the Weather (WTW) </div>
                    <div><a style={{color:'blue', fontWeight: 'bold'}} href = "https://github.com/bcermak/Weather-Dashboard"> Repo </a> || <a style={{color:'blue', fontWeight: 'bold'}} href = "https://weather-the-weather-3e172.web.app/"> Deployed </a></div>
                    <Image style ={{marginBottom:'8px', border:'solid black'}} src={WeatherApp} className ="primaryPic1"></Image>
                    <div style={{color:'black'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> HTML, CSS, Javascript, JQuery</div>
                </div>
                <br></br>
                <div style={{backgroundColor:'#d271ff', paddingTop:'25px', paddingBottom:'25px'}} className="col 6">
                    <div style={{color:'black', fontWeight: 'bold',fontSize: '25px'}}> BrewsNDadJokes </div>
                    <div><a style={{color:'blue', fontWeight: 'bold'}} href = "https://github.com/bcermak/BrewsNDadJokes"> Repo </a> || <a style={{color:'blue', fontWeight: 'bold'}} href = "https://brewsndadjokes.web.app"> Deployed </a></div>
                    <Image style ={{ marginBottom:'8px', border:'solid black'}} src={BrewsNDadJokes} className ="primaryPic1"></Image>
                    <div style={{color:'black'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> HTML5, CSS, Javascript, JQuery, Materialize, APIs </div>
                </div>
                <br></br>
            </div>
            <div id = "projectsBottom" className ="row projects">
                <div style={{backgroundColor:'#eaff71', paddingTop:'25px', paddingBottom:'25px'}} className= "col 6">
                    <div style={{color:'black', fontWeight: 'bold',fontSize: '25px'}}>Team Profiles Generator (CLI) </div>
                    <div><a style={{color:'blue', fontWeight: 'bold'}} href = "https://github.com/bcermak/Team-Profiles"> Repo </a></div>
                    <Image style ={{marginBottom:'8px', border:'solid black'}} src={TeamProfiles} className ="primaryPic1"></Image>
                    <div style={{color:'black'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> HTML, CSS, Javascript, Node.js, Inquirer, FS </div>
                </div>
                <br></br>  
                <div style={{backgroundColor:' #ffa571', paddingTop:'25px', paddingBottom:'25px'}} className="col 6">
                    <div style={{color:'black', fontWeight: 'bold',fontSize: '25px'}}> Keep Austin Social </div>
                    <div><a style={{color:'blue',fontWeight: 'bold'}} href = "https://github.com/bcermak/KeepAustinSocial"> Repo </a> || <a style={{color:'blue', fontWeight: 'bold'}} href = "https://keepaustinsocial.herokuapp.com/"> Deployed </a></div>
                    <Image style ={{marginBottom:'8px', border:'solid black'}} src={KeepAustinSocial}></Image>
                    <div style={{color:'black'}}><span style={{color:'black', fontSize:'larger', fontWeight:'bolder'}}>Languages & Tools:</span> HTML, CSS, Javascript, JQuery, Bootstrap, Passport, Express, Moment</div>
                </div>
            </div>
          </div>  
      </section>
    );
  }
}

export default Portfolio;
