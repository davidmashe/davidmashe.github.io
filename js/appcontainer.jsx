import React from 'react';
// import {RaisedButton} from 'material-ui';
import Store from './store/store.js';
import Dispatcher from './dispatcher/dispatcher.js';
import Home from './home.jsx';
import Oracle from './oracle.jsx';
import Info from './info.jsx';
import Projects from './projects.jsx';
import Meetup from './meetup.jsx';

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
  handleInfo : function(event){
    Dispatcher.dispatch({type:'info'});
  },
  handleProjects : function(event){
    Dispatcher.dispatch({type:'projects'});
  },
  handleMeetup : function(event){
    Dispatcher.dispatch({type:'meetup'});
  },
  handleOracle : function(event){
    Dispatcher.dispatch({type:'oracle'});
  },
  render : function(){
    if (debug) console.log("state @ render:",this.state);
    if (this.state.home){
      return (
        <Home onMeetup={this.handleMeetup} onInfo={this.handleInfo}
          onOracle={this.handleOracle} onProjects={this.handleProjects}
          text={this.state.defaultText} />
      );
    } else if (this.state.oracle){
      return (
        <Oracle />
      );
    } else if (this.state.projects){
      return (
        <Projects />
      );
    } else if (this.state.info){
      return (
        <Info />
      );
    } else if (this.state.meetup){
      return (
        <Meetup />
      );
    }
  }// close render function
});
