function _getIdFromDOM(element){
  console.log("lib function got a target node of:",element);
  if (element.className === "button-box"){
    if (element.id){
      var hyphen = element.id.indexOf('-');
      return element.id.slice(0,hyphen);
    }
  } else if (element.parentElement) {
    return _getIdFromDOM(element.parentElement);
  } else {
    console.log("getIdFromDOM ran out of parents");
  }
}

export default {
  getIdFromDOM : function (element) {
    return _getIdFromDOM(element);
  },
  stateTemplates : {
    oracle : {
      oracle : true,
      home : false
    },
    info : {
      oracle : true,
      home : false
    },
    meetup : {
      oracle : true,
      home : false
    },
    projects : {
      oracle : true,
      home : false
    },
    home : {
        home : true,
        defaultText : "Thanks for visiting my portfolio app! I built it with React & Flux"
    }
  },// close stateTemplates

}
