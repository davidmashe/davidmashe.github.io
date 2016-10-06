import React from 'react';
import {RaisedButton} from 'material-ui';
// import AppStore from '../store/store.js';
import Dispatcher from '../dispatcher/dispatcher.js';
// import AppLib from '../lib/library.jsx';

export default React.createClass({
  goBack : function(){
    Dispatcher.dispatch({type:'home'});
  },
  clickHandler : function(event){
    //modify this.props.stateObject, then...
    this.props.clickHandler(this.props.stateObject);
  },
  getMiniDOMFromSubState : function(stateObject){
    var clickTarget = this.clickHandler;
    if (true){
      return (
        <div id="singularity-box" className="button-box">
          <h1>{"Oracle, what will the singularity be like?"}</h1>
          <RaisedButton label="GIVE ANSWER NOW" primary={true}
            onClick={clickFunc} />
        </div>
        <div id="stable-box" className="button-box">
          <h1>{"Oracle, how do we keep our minds and hearts stable in stressful times?"}</h1>
          <RaisedButton label="BRAINIFY ME" primary={true}
            onClick={clickFunc} />
        </div>
        <div id="best-box" className="button-box">
          <h1>{"Oracle, what is best in life?"}</h1>
          <RaisedButton label="CONFER KNOWLEDGE" primary={true}
            onClick={clickFunc} />
        </div>
      );
    } else if (stateObject.whatevs){
      console.log("woah!");
    }

  },
  render : function(){
    var state = this.state;
    var miniDOM = this.getMiniDOMFromSubState(state.subState);
    return (
      <div>
        <h1>{props.headerText}</h1>
        <div className="image-box">
          <img src={props.imageURL} />
        </div>
        <div id="home-box" className="button-box">
          <RaisedButton label="<-BACK" primary={true}
            onClick={this.props.clickHandler} />
        </div>
      </div>
    );
  }
});
