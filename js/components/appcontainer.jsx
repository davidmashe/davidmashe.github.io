import React from 'react';
// import {RaisedButton} from 'material-ui';
import Store from '../store/store.js';
import Dispatcher from '../dispatcher/dispatcher.js';
import Home from './home.jsx';
import Project from './projects.jsx';
import Lib from '../lib/library.jsx';
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
    var state = this.state;
    if (debug) console.log("appcontainer state at render:",state);
    if (state.home){
      return (
        <Home clickHandler={this.onClick}
          text={state.defaultText} />
      );
    } else if (state.project){
      return (
        <Project clickHandler={this.onClick}
          specifics={state.specifics} />
      );
    } else if (state.oracle){
      return (
        <Oracle clickHandler={this.onClick}
          specifics={state.specifics} />
      );
    } else if (state.info){
      return (
        <Info clickHandler={this.onClick}
          specifics={state.specifics} />
      );
    }
  }// close render function
});
