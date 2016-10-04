/*
** This is my attempt at a re-usable component. You know,
** to use what is arguably react's best feature.
*/

/*
STATIC REQUIREMENTS
- back button
- gets an array of named actions that become div wrappers with name as id
  each div wrapper contains button which launches that action, based on id name

OPTIONAL
- show an image
*/

import React from 'react';
import {RaisedButton} from 'material-ui';
import AppStore from './store/store.js';
import Dispatcher from './dispatcher/dispatcher.js';
import AppLib from './lib/library.jsx';

export default React.createClass({
  goBack : function(){
    Dispatcher.dispatch({type:'home'});
  },
  render : function(){
    var demProps = this.props.specifics;
    var miniDOM = this.props.miniDOM
    return (
      <div>
        <h1>{demProps.headerText}</h1>
        <div className="image-box">
          <img src={demProps.imageURL} />
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
