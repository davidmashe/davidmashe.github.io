import ReactDOM from 'react-dom';
import React from 'react';
import AppContainer from './appcontainer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

onresize = function(){
  if (debug){
    console.log("! --- RESIZE --- !")
    console.log("window width:",window.innerWidth);
    console.log("window height",window.innerHeight);
    console.log("screen width:",screen.availWidth);
    console.log("screen height",screen.availHeight);
    console.log("document width:",document.documentElement.clientWidth);
    console.log("document height",document.documentElement.clientHeight);
  }
}

onload = function(){
  var howYouDoin = document.getElementById("hey-react-how-you-doin");
  window.master = howYouDoin;

  console.log("window width:",window.innerWidth);
  console.log("window height",window.innerHeight);
  console.log("screen width:",screen.availWidth);
  console.log("screen height",screen.availHeight);
  console.log("document width:",document.documentElement.clientWidth);
  console.log("document height",document.documentElement.clientHeight);  

  // bootstrap? No way, I'm rollin my own
  // howYouDoin.style.width = '' + window.innerWidth + 'px';
  // howYouDoin.style.height = '' + window.innerHeight + 'px';
  howYouDoin.style.width = '' + document.documentElement.clientWidth + 'px';
  howYouDoin.style.height = '' + document.documentElement.clientWidth + 'px';  

  window.$ = "I said I built it in React, son!";
  window.debug = true;

  ReactDOM.render(
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>,
    howYouDoin);
}
