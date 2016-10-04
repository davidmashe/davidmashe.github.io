import React from 'react';
import {RaisedButton} from 'material-ui';

export default React.createClass({
  render : function(){
    return (
      <div>
        <h1>Hey Breh!</h1>
        <p>{this.props.text}</p>
        <div className="button-bucket">
          <div id="info-box" className="button-box">
            <RaisedButton id="info-button" onClick={this.props.clickHandler}
              label="RESUME & INFO" primary={true} />
          </div>
          <div id="project-box" className="button-box">
            <RaisedButton id="projects-button" onClick={this.props.clickHandler}
              label="PROJECTS" primary={false} />
          </div>
          <div id="oracle-box" className="button-box">
            <RaisedButton id="oracle-button" onClick={this.props.clickHandler}
              label="ASK THE ORACLE" secondary={true} />
          </div>
        </div>
      </div>
    );
  }
});
