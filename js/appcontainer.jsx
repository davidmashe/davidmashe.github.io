import React from 'react';
// import {RaisedButton} from 'material-ui';
import Store from './store/store.js';
import Dispatcher from './dispatcher/dispatcher.js';
import Home from './home.jsx';
import ChoiceDisplay from './choice-display.jsx';
import Lib from './lib/library.jsx';
import Oracle from './oracle.jsx';
import Info from './info.jsx';

export default React.createClass({
  componentDidMount : function(){
    Store.changeSniffer(this.onChange);
  },
  onChange : function(){
    this.setState(Store.getState());
  },
  getInitialState : function(){
    return (Store.getState());
  },
  onClick : function(event){
    //window.breh = event.nativeEvent;
    var keyWord = Lib.getIdFromDOM(event.target);
    if (debug) console.log("you clicked",keyWord + ',',"bruh");
    Dispatcher.dispatch({type:keyWord});
  },
  render : function(){
    var datState = this.state;
    if (debug) console.log("appcontainer state at render:",datState);
    if (datState.home){
      return (
        <Home clickHandler={this.onClick}
          text={datState.defaultText} />
      );
    } else if (datState.project){
      return (
        <ChoiceDisplay clickHandler={this.onClick}
          specifics={datState.specifics} miniDOM={datState.specifics.miniDOM}/>
      );
    } else if (datState.oracle){
      return (
        <Oracle clickHandler={this.onClick}
          specifics={datState.specifics} />
      );
    } else if (datState.info){
      return (
        <Info clickHandler={this.onClick}
          specifics={datState.specifics} />
      );
    }
  }// close render function
});
