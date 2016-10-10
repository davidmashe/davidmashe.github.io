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
  getSingularityView : function(state,clickHandler){
    var askNodes = (state.lastAsked === 'singularity') ?
      (<div></div>) :
      (<div>
        <div id="singularity-box" className="button-box">
          <p>{state.questions.best}</p>
          <RaisedButton label="GIVE ANSWER NOW" primary={false}
            onClick={clickFunc} />
        </div>) ;

    var image = (state.lastAsked === 'singularity') ?
      (<img src={state.stableImageURL} />) : (<img src={null} />) ;

    return (
      <div>
        {askNodes}
        <div id="singularity-display">
          {image}
        </div>
      </div>
    );
  },
  getStableView : function(state,clickHandler){
    var askNodes = (state.lastAsked === 'stable') ?
      <div></div> :
      <div>
        <div id="stable-box" className="button-box">
          <p>{state.questions.best}</p>
          <RaisedButton label="BRAINIFY ME" primary={false}
            onClick={clickFunc} />
        </div> ;

    var image = (state.lastAsked === 'stable') ?
      <img src={state.stableImageURL} /> : <img src={null} /> ;

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
    var askNodes = (state.lastAsked === 'best') ?
      <div></div> :
      <div id="best-box" className="button-box">
        <p>{stateObject.questions.best}</p>
        <RaisedButton label="CONFER KNOWLEDGE" primary={false}
        onClick={clickFunc} />
      </div> ;

    var video = (state.lastAsked === 'best') ?
      <iframe src={state.bestVideoURL} /> : <iframe /> ;

    return (
      <div>
        {askNodes}
        <div id="best-display" >
          {video}
        </div>
      </div>
    );
  },
  getMiniDOMFromSubState : function(stateObject){
    return (
      <div className="oracle-mini-DOM">
        {this.getSingularityView(stateObject,this.clickHandler)}
        {this.getStableView(stateObject,this.clickHandler)}
        {this.getBestView(stateObject,this.clickHandler)}
      </div>
    );
  },
  render : function(){
    var props = this.props.stateTransfer;
    console.log("oracle's render has props of: ",props);
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
