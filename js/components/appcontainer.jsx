import React from 'react';
// import {RaisedButton} from 'material-ui';
import Store from '../store/store.js';
import Dispatcher from '../dispatcher/dispatcher.js';
import Home from './home.jsx';
import Project from './projects.jsx';
import Lib from '../lib/library.js';
import Oracle from './oracle.jsx';
import Info from './info.jsx';

export default React.createClass({
  componentDidMount : function(){
    Store.changeSniffer(this.onChange);
  },
  // componentWillUnMount : function(){
  //   Store.killChangeSniffer(this.onChange);
  // },
  onChange : function(){
    window.state = Store.getState();
    this.setState(Store.getState());
  },
  getInitialState : function(){
    return (Store.getState());
  },
  componentWillReceiveProps : function(nextProps){
    console.log("appcontainer.componentWillReceiveProps got:",nextProps);
  },
  onClick : function(event){
    //window.breh = event.nativeEvent;
    var keyWord = Lib.getIdFromDOM(event.target);
    if (debug) console.log("you clicked",keyWord + ',',"bruh");
    Dispatcher.dispatch({type:keyWord});
  },
  render : function(){

    if (debug) console.log("appcontainer state at render:",this.state);
    if (this.state.home){
      return (
        <Home clickHandler={this.onClick}
          text={this.state.headerText} />
      );
    } else if (this.state.project){
      return (
        <Project clickHandler={this.onClick}
          stateTransfer={this.state} />
      );
    } else if (this.state.oracle){
      return (
        <Oracle clickHandler={this.onClick} stateTransfer={this.state} />
      );
    } else if (this.state.info){
      return (
        <Info clickHandler={this.onClick}
          stateTransfer={this.state} />
      );
    }
  }// close render function
});
