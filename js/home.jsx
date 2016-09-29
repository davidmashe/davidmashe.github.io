import React from 'react';
import {RaisedButton} from 'material-ui';

export default React.createClass({
  render : function(){
    return (
      <div>
        <h1>Hey Breh!</h1>
        <p>{this.props.text}</p>
        <div className="button-bucket">
          <div className="button-box">
            <RaisedButton id="info-button" onClick={this.props.onInfo}
              label="RESUME & INFO" primary={true}/>
          </div>
          <div className="button-box">
            <RaisedButton id="projects-button" onClick={this.props.onProjects}
              label="PROJECTS" primary={false}/>
          </div>
          <div className="button-box">
            <RaisedButton id="meetup-button" onClick={this.props.onMeetup}
              label="THE MEETUP" secondary={true} />
          </div>
          <div className="button-box">
            <RaisedButton id="oracle-button" onClick={this.props.onOracle}
              label="ASK THE ORACLE" primary={true} />
          </div>
        </div>
      </div>
    );
  }
});
