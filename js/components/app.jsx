import ReactDOM from 'react-dom';
import React from 'react';
import AppContainer from './appcontainer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

onload = function(){
  var howYouDoin = document.getElementById("hey-react-how-you-doin");
  window.master = howYouDoin;

  // bootstrap? No way, I'm rollin my own
  howYouDoin.style.width = '' + window.innerWidth + 'px';
  howYouDoin.style.height = '' + window.innerHeight + 'px';

  window.$ = "I said I built it in React, son!";
  window.debug = true;

  ReactDOM.render(
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>,
    howYouDoin);
}
