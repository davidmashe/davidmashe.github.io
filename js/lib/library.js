
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

var _constants = {
  bestVideoURL : "https://www.youtube.com/embed/Oo9buo9Mtos",
  stableImageURL : "http://www.fnstatic.co.uk/images/source/article/omg-chocolate-cake-7_1.jpg",
  singularityVideoURL : "https://www.youtube.com/embed/it0sf4CMDeM",
  oracleImage : "https://s-media-cache-ak0.pinimg.com/236x/1d/ed/cb/1dedcb4aafd298495bb9f4cf6d027698.jpg",
  oracleHeader : "The mighty Oracle!",
  infoHeader : "Here's My Deal",
  infoImage : "http://media3.giphy.com/media/wQzipgpBrekV2/giphy.gif",
  projectImage : "https://media2.giphy.com/media/4gXBZDVo2pezS/giphy.gif",
  projectHeader : "Stuff I've Built",
  homeText : "Thanks for visiting my portfolio app! Built with React & Flux"
};

export default {
  getIdFromDOM : function (element) {
    return _getIdFromDOM(element);
  },
  stateTemplates : {
    oracle : {
      oracle : true,
      home : false,
      info : false,
      project : false,
      headerText : _constants.oracleHeader,
      imageURL : _constants.oracleImage,
      bestVideoURL : _constants.bestVideoURL,
      stableImageURL : _constants.stableImageURL,
      singularityVideoURL : _constants.singularityVideoURL,
      subState : {
        singularity : true,
        stable : true,
        best : true,
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
      oracle : false,
      home : false,
      info : true,
      project : false,
      headerText : _constants.infoHeader,
      imageURL : _constants.infoImage,
      bestVideoURL : _constants.bestVideoURL,
      stableImageURL : _constants.stableImageURL,
      singularityVideoURL : _constants.singularityVideoURL,
      subState : {
        singularity : true,
        stable : true,
        best : true,
        lastAnswered : ""
      },
      questions : {}
    },
    project : {
      project : true,
      home : false,
      oracle : false,
      info : false,
      headerText : _constants.projectHeader,
      imageURL : _constants.projectImage,
      bestVideoURL : _constants.bestVideoURL,
      stableImageURL : _constants.stableImageURL,
      singularityVideoURL : _constants.singularityVideoURL,
      subState : {
        singularity : true,
        stable : true,
        best : true,
        lastAnswered : ""
      },
      questions : {}
    },
    home : {
        home : true,
        oracle : false,
        info: false,
        project : false,
        headerText : _constants.homeText,
        imageURL : _constants.oracleImage,
        bestVideoURL : _constants.bestVideoURL,
        stableImageURL : _constants.stableImageURL,
        singularityVideoURL : _constants.singularityVideoURL,
        subState : {
          singularity : true,
          stable : true,
          best : true,
          lastAnswered : ""
        },
        questions : {}
    }
  }// close stateTemplates

}
