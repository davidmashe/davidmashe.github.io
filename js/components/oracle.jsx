import React from 'react';
import {RaisedButton} from 'material-ui';
// import AppStore from '../store/store.js';
import Dispatcher from '../dispatcher/dispatcher.js';
// import AppLib from '../lib/library.js';

export default React.createClass({
  componentDidMount : function(){
    console.log("oracle's componentDidMount fired");
  },
  componentWillMount : function(){
    console.log("oracle's componentWillMount fired");
  },
  componentWillUnMount : function(){
    console.log("oracle's componentWillUnMount fired");
  },
  componentWillReceiveProps : function(nextProps){
    console.log("oracle.componentWillReceiveProps got:",nextProps);
  },
  // shouldComponentUpdate : function(nextProps,nextState){
  //   console.log("oracle.shouldComponentUpdate props:",nextProps,"nextState:",nextState);
  // },
  componentWillUpdate : function(nextProps,nextState){
    console.log("oracle.componentWillUpdate props:",nextProps,"nextState:",nextState);
  },
  componentDidUpdate : function(nextProps,nextState){
    console.log("oracle.componentDidUpdate props:",nextProps,"nextState:",nextState);
  },
  goBack : function(){
    Dispatcher.dispatch({type:'home'});
  },
  clickHandler : function(event){
    //modify this.props.stateObject, then...
    this.props.clickHandler(event);
  },
  getSingularityView : function(state,clickHandler){
    var last = state.subState.lastAnswered;

    var video = null;
    var askNodes = null;

    if(state.subState.singularity){
      askNodes = (
        <div>
          <div id="singularity-box" className="button-box">
            <p>{state.questions.singularity}</p>
            <RaisedButton label="GIVE ANSWER NOW" primary={false}
              onClick={clickHandler} />
          </div>
        </div>
      );
    } else if (last === 'singularity'){
      video = <iframe src={state.singularityVideoURL}
        width="420" height="315" />;
    }

    return (
      <div>
        {askNodes}
        <div id="singularity-display">
          {video}
        </div>
      </div>
    );
  },
  getStableView : function(state,clickHandler){
    var last = state.subState.lastAnswered;

    var image = null;
    var askNodes = null;

    if(state.subState.stable){
      askNodes = (
        <div>
          <div id="stable-box" className="button-box">
            <p>{state.questions.stable}</p>
            <RaisedButton label="BRAINIFY ME" primary={false}
              onClick={clickHandler} />
          </div>
        </div>
      );
    } else if (last === 'stable'){
      image = <img src={state.stableImageURL} />;
    }

    return (
      <div>
        {askNodes}
        <div id="stable-display">
          {image}
        </div>
      </div>
    );
  },
  getBestView : function(state,clickHandler){
    var last = state.subState.lastAnswered;

    var video = null;
    var askNodes = null;

    if(state.subState.best){
      askNodes = (
        <div>
          <div id="best-box" className="button-box">
            <p>{state.questions.best}</p>
            <RaisedButton label="CONFER KNOWLEDGE" primary={false}
              onClick={clickHandler} />
          </div>
        </div>
      );
    } else if (last === 'best'){
      video = <iframe src={state.bestVideoURL}
        width="420" height="315" />;
    }

    return (
      <div>
        {askNodes}
        <div id="best-display">
          {video}
        </div>
      </div>
    );
  },
  getMiniDOMFromSubState : function(stateObject){
    return (
      <div className="oracle-mini-dom">
        {this.getSingularityView(stateObject,this.clickHandler)}
        {this.getStableView(stateObject,this.clickHandler)}
        {this.getBestView(stateObject,this.clickHandler)}
      </div>
    );
  },
  render : function(){
    var props = this.props.stateTransfer;
    //console.log("oracle got props of:",props);
    window.props = props;
    var miniDOM = this.getMiniDOMFromSubState(props);
    return (
      <div id="oracle-container" >
        <h1 id="oracle-header">{props.headerText}</h1>
        <div className="image-box">
          <img id="oracle-image" src={props.imageURL} />
        </div>
        {miniDOM}
        <div id="home-box" className="button-box">
          <RaisedButton label="<-BACK" primary={true}
            onClick={this.props.clickHandler} />
        </div>
      </div>
    );
  }
});
