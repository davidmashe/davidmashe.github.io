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
import AppLib from './lib/library.js';

export default React.createClass({
  // componentDidMount : function(){
  //
  // },
  goBack : function(){
    Dispatcher.dispatch({type:'home'});
  },
  handleClick(event){
    actionKey = AppLib.getIdFromDOM(event);
    this.props.onClick(actionKey);
  },
  getChoiceListElements : function(props){
    return (<div>choice list will go here</div>);
  },
  render : function(){
    var choiceList = getChoiceListElements(this.props);
    return (
      <div>
        <h1>{this.props.oracleHeaderText}</h1>
        <div className="image-box">
          <img src={this.props.oracleImage} />
        </div>
        {choiceList}
        <div id="choice-box-back">
          <RaisedButton label="<-BACK" primary={true}
            onClick={this.handleClick} />
        </div>
      </div>
    );
  }
});
