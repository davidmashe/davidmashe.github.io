import React from 'react';
// import {RaisedButton} from 'material-ui';
import Store from './store/store.js';
import Dispatcher from './dispatcher/dispatcher.js';
import Home from './home.jsx';
import ChoiceDisplay from './choice-display.jsx';
import Lib from './lib/library.jsx';

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
    if (debug) console.log("you fuckin clicked",keyWord + ',',"bruh");
    Dispatcher.dispatch({type:keyWord});
  },
  render : function(){
    if (debug) console.log("state @ render:",this.state);
    if (this.state.home){
      return (
        <Home clickHandler={this.onClick}
          text={this.state.defaultText} />
      );
    } else if (this.state.oracle){
      var props = this.state.oracleProps;
      return (
        <ChoiceDisplay motif="oracle" clickHandler={this.onClick}
          specifics={this.state.specifics} />
      );
    } else if (this.state.projects){
      var props = this.state.projectsProps;
      return (
        <ChoiceDisplay motif="projects" onClick={this.onClick}
          specifics={this.state.specifics} />
      );
    } else if (this.state.info){
      var props = this.state.infoProps;
      return (
        <ChoiceDisplay motif="info" onClick={this.onClick}
          specifics={this.state.specifics} />
      );
    } else if (this.state.meetup){
      var props = this.state.meetupProps;
      return (
        <ChoiceDisplay motif="meetup" onClick={this.onClick}
          specifics={this.state.specifics} />
      );
    }
  }// close render function
});
