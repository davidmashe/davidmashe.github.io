import React from 'react';
import {RaisedButton} from 'material-ui';
import AppStore from './store/store.js';
import Dispatcher from './dispatcher/dispatcher.js';

export default React.createClass({
  goBack : function(){
    Dispatcher.dispatch({type:'home'});
  },
  getAnswer(event){
    window.e = event.nativeEvent;
  },
  render : function(){
    return (
      <div>
        <h1>{this.props.oracleHeaderText}</h1>
        <div className="oracle-image-box">
          <img src={this.props.oracleImage} />
        </div>
        <div className="question-button-box">
          <p>What is Best In Life?</p>
          <RaisedButton label="LAY IT ON ME" primary={true}
            onClick={this.getAnswer} />
        </div>
        <div className="display-box">
        </div>
        <div>
          <RaisedButton label="<-BACK" primary={true}
            onClick={this.goBack} />
        </div>
      </div>
    );
  }
});
