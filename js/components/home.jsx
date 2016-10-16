import React from 'react';
import {RaisedButton,Paper} from 'material-ui';
import Lib from '../lib/library.js';

export default React.createClass({
  render : function(){
    return (
      <div>
        <h1>Oh, why Hello!</h1>
        <div>
          <Paper>
            <img src={this.props.image} />
          </Paper>
        </div>
        <p>{this.props.text}</p>
        <div className="button-bucket">
          <div id="info-box" className="button-box">
            <RaisedButton id="info-button" onClick={this.props.clickHandler}
              label="RESUME & INFO" primary={true} className="app-button" />
          </div>
          <div id="project-box" className="button-box">
            <RaisedButton id="projects-button" onClick={this.props.clickHandler}
              label="PROJECTS" primary={false} className="app-button" />
          </div>
          <div id="oracle-box" className="button-box">
            <RaisedButton id="oracle-button" onClick={this.props.clickHandler}
              label="ASK THE ORACLE" secondary={true} className="app-button" />
          </div>
        </div>
      </div>
    );
  }
});
