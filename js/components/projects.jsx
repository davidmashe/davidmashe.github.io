import React from 'react';
import {RaisedButton,Paper} from 'material-ui';
// import AppStore from '../store/store.js';
import Dispatcher from '../dispatcher/dispatcher.js';
// import AppLib from '../lib/library.jsx';



export default React.createClass({
  // goBack : function(){
  //   Dispatcher.dispatch({type:'home'});
  // },
  text : {
    intro : "Everyday I build part of a REST API in java. On the job I've also:",
    introTwo : "done support front-end work (vanilla js, html & css)",
    introThree : "worked with Oracle (SQL) to model & access data",
    introSide : "On the side I've recently played with: ",
    two : "full-stack apps with node.js,express, and react.js/flux.js",
    three : "building/querying my own data models in a local postgreSQL instance.",
    four : "simple webscrapers in python",
    five : "simple Android app",
    closer : "If you're looking for an engineer, I'd be happy to show you some of my work."
  },
  render : function() {
    return (
      <div className="container" >
        <h1 className="headline">{this.props.stateTransfer.headerText}</h1>
        <div className="image-box">
          <Paper zDepth={4} className="papel" >
            <img className="gif" src={this.props.stateTransfer.imageURL} />
          </Paper>
        </div>
        <div id="project-box">
          <Paper zDepth={4} className="papel" >
            <p className="text" >{this.text.intro}</p>
            <ul>
              <li className="text" >{this.text.introTwo}</li>
              <li className="text" >{this.text.introThree}</li>
            </ul>
          </Paper>
          <Paper zDepth={4} className="papel" >
            <p className="text" >{this.text.introSide}</p>
            <ul>
              <li className="text" >{this.text.two}</li>
              <li className="text" >{this.text.three}</li>
              <li className="text" >{this.text.four}</li>
              <li className="text" >{this.text.five}</li>
            </ul>
          </Paper>
          <Paper zDepth={4} className="papel" >
            <p>{this.text.closer}</p>
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
