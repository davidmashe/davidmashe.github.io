import React from 'react';
import {RaisedButton,Paper} from 'material-ui';
import Dispatcher from '../dispatcher/dispatcher.js';

export default React.createClass({
  strings : {
    email : "davidmashe@gmail.com",
    linkedin : "linkedin.com/in/davidmashe",
    github : "github.com/davidmashe",
    meetup : "https://www.meetup.com/nyc-bootcampers-anonymous",
    resume : "http://davidmashe.github.io/Sept_2016_resume.pdf"
  },
  resumeRedirect : function() {
    window.location.href = this.strings.resume;
  },
  meetupRedirect : function() {
    window.location.href = this.strings.meetup;
  },
  render : function(){
    if (debug) console.log("info props @ render:",this.props);
    return (
      <div className="container" >
        <Paper zDepth={4}>
          <h1 className="headline">{this.props.stateTransfer.headerText}</h1>
        </Paper>
        <div className="image-box">
          <Paper zDepth={4}>
            <img className="gif" src={this.props.stateTransfer.imageURL} />
          </Paper>
        </div>
        <div id="info-box">
          <Paper zDepth={4}>
            <p className="text" >{this.strings.email}</p>
            <p className="text" >{this.strings.linkedin}</p>
            <p className="text" >{this.strings.github}</p>
            <div className="button-box">
              <RaisedButton className="app-button"
                label="GO TO RESUME DOCUMENT" primary={true}
                onClick={this.resumeRedirect} />
            </div>
          </Paper>
        </div>
        <div id="home-box" className="button-box">
          <RaisedButton label="<-BACK" primary={true}
            onClick={this.props.clickHandler} />
        </div>
      </div>
    );
  }
});
