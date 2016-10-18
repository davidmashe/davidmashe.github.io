import React from 'react';
import {RaisedButton,Paper} from 'material-ui';
import Lib from '../lib/library.js';

export default React.createClass({
  getButtonStyle : function(){
    return {
      height : "100%"
    };
  },
  getLabelStyle : function(){
    return {
      fontSize : "30px"
    };
  },
  render : function(){
    var oracleBox = (
      <div id="oracle-box" className="button-box">
        <RaisedButton id="oracle-button" onClick={this.props.clickHandler}
          label="ASK THE ORACLE" secondary={true} className="app-button"
          fullWidth={true} style={buttonStyle} labelStyle={labelStyle} />
      </div>
    );
    oracleBox = null; //temp

    var buttonStyle = this.getButtonStyle();
    var labelStyle = this.getLabelStyle();
    return (
      <div className="container">
        <Paper zDepth={4} className="papel" >
          <h1 className="headline">Oh, why Hello!</h1>
        </Paper>
        <div>
          <Paper zDepth={4} className="papel" >
            <img className="gif" src={this.props.image} />
            <p className="text" >{this.props.text}</p>
          </Paper>
        </div>

        <div className="button-bucket">
          <div id="info-box" className="button-box">
            <RaisedButton onClick={this.props.clickHandler}
              label="RESUME PDF" primary={true} className="app-button"
              fullWidth={true} style={buttonStyle} labelStyle={labelStyle} />
          </div>
          <div id="project-box" className="button-box">
            <RaisedButton onClick={this.props.clickHandler}
              label="WHAT I'VE DONE" secondary={true} className="app-button"
              fullWidth={true} style={buttonStyle} labelStyle={labelStyle} />
          </div>
          {oracleBox}
        </div>
      </div>
    );
  }
});
