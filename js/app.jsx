import ReactDOM from 'react-dom';
import React from 'react';
import AppContainer from './appcontainer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

window.$ = "I said I built it in React, son!";
window.debug = true;

window.say = function(...array){
  if (debug) console.log(array);
};

ReactDOM.render(
  <MuiThemeProvider>
    <AppContainer />
  </MuiThemeProvider>,
  document.getElementById("hey-react-how-you-doin"));
