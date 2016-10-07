import React from 'react';

function _getIdFromDOM(element){
  if (element.className === "button-box"){
    if (element.id){
      var hyphen = element.id.indexOf('-');
      return element.id.slice(0,hyphen);
    } else {
      if (debug) console.log("_getIdFromDOM found no id property for this element");
      return 'error';
    }
  } else if (element.parentElement) {
    return _getIdFromDOM(element.parentElement);
  } else {
    if (debug) console.log("getIdFromDOM ran out of parents");
    return 'error';
  }
}

export default {
  getIdFromDOM : function (element) {
    return _getIdFromDOM(element);
  },
  stateTemplates : {
    oracle : {
      oracle : true,
      home : false,
      headerText : "The mighty Oracle!",
      imageURL : null,
      bestVideoURL : "",
      stableImageURL : "",
      singularityVideoURL : "",
      subState : {
        singularity : false,
        stable : false,
        best : false,
        lastAnswered : ""
      },
      questions : {
        singularity : "Oracle, what will the singularity be like?",
        stable :
          "Oracle, how do we keep our minds and hearts stable in stressful times?",
        best : "Oracle, what is best in life?",
      }
    },
    info : {
      info : true,
      home : false,
      specifics : {
        headerText : "Here's My Deal",
        imageURL : null
      },
      subState : {
        clicked : false
      }
    },
    project : {
      project : true,
      home : false,
      specifics : {
        headerText : "Stuff I've Built",
        imageURL : null
      }
    },
    home : {
        home : true,
        defaultText : "Thanks for visiting my portfolio app! Built with React & Flux"
    }
  }// close stateTemplates

}
