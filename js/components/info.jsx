import React from 'react';
import {RaisedButton,Paper} from 'material-ui';
// import AppStore from '../store/store.js';
import Dispatcher from '../dispatcher/dispatcher.js';
// import AppLib from '../lib/library.jsx';

export default React.createClass({
  // goBack : function(){
  //   Dispatcher.dispatch({type:'home'});
  // },
  strings : {
    email : "davidmashe@gmail.com",
    linkedin : "linkedin.com/in/davidmashe",
    github : "github.com/davidmashe",
    // resume : "http://davidmashe.github.io/Sept_2016_resume.pdf"
    resume : "file:///home/david/davidmashe.github.io/Sept_2016_resume.pdf"
  },
  resumeRedirect : function() {
    window.location.href = this.strings.resume;
  },
  render : function(){
    console.log("props:",this.props);
    return (
      <div>
        <h1>{this.props.stateTransfer.headerText}</h1>
        <div className="image-box">
          <Paper>
            <img src={this.props.stateTransfer.imageURL} />
          </Paper>
        </div>
        <div id="info-box">
          <Paper>
            <p>{this.strings.email}</p>
            <p>{this.strings.email}</p>
            <p>{this.strings.email}</p>
            <RaisedButton label="GO TO RESUME DOCUMENT" primary={true}
            onClick={this.resumeRedirect} />
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
