import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Advensure from './Assets/Images/advensure.jpg';
import BrewsNDadJokes from './Assets/Images/brewsndadjokes.jpg';
import TeamProfiles from './Assets/Images/teamprofiles.jpg';
import WeatherApp from './Assets/Images/weatherapp.jpg';
import ReactEmployeeDirectory from './Assets/Images/reactempdir.jpg';
import ProgressiveBudget from './Assets/Images/budgettracker.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Portfolio2() {
  const classes = useStyles();

  return (
    <div className="container" style={{}}>
      <div style={{display:'flex', alignItems:'center'}}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Advensure"
          height="140"
          image={Advensure}
          title="Advensure"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
            Advensure
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Travel application that allows you to create categorically-organized checklists.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="large" color="primary" style={{fontWeight:'bolder'}}>
          Repo
        </Button>
        <Button size="large" color="primary"style={{fontWeight:'bolder'}}>
          Deployed
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Brews"
          height="140"
          image={BrewsNDadJokes}
          title="Brews"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
            Brews & Dad Jokes
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Application...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="large" color="primary" style={{fontWeight:'bolder'}}>
          Repo
        </Button>
        <Button size="large" color="primary"style={{fontWeight:'bolder'}}>
          Deployed
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="team-profiles"
          height="140"
          image={TeamProfiles}
          title="team-profiles"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
            Team Profiles Generator (CLI)
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Application...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="large" color="primary" style={{fontWeight:'bolder'}}>
          Repo
        </Button>
        <Button size="large" color="primary"style={{fontWeight:'bolder'}}>
          Deployed
        </Button>
      </CardActions>
    </Card>
    </div>
    <div style={{display:'flex'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="WeatherApp"
          height="140"
          image={WeatherApp}
          title="WeatherApp"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
            Weather the Weather
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Application...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="large" color="primary" style={{fontWeight:'bolder'}}>
          Repo
        </Button>
        <Button size="large" color="primary"style={{fontWeight:'bolder'}}>
          Deployed
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="empdir"
          height="140"
          image={ReactEmployeeDirectory}
          title="empdir"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
            React Employee Directory
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Application...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="large" color="primary" style={{fontWeight:'bolder'}}>
          Repo
        </Button>
        <Button size="large" color="primary"style={{fontWeight:'bolder'}}>
          Deployed
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="progbudget"
          height="140"
          image={ProgressiveBudget}
          title="progbudget"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
            Progressive Budget Tracker
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Application...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="large" color="primary" style={{fontWeight:'bolder'}}>
          Repo
        </Button>
        <Button size="large" color="primary"style={{fontWeight:'bolder'}}>
          Deployed
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>



  );
}

