var singularityURL = "https://www.youtube.com/embed/it0sf4CMDeM";
var conanURL = "https://www.youtube.com/embed/Oo9buo9Mtos";
var cakeURL = "http://www.howtomakechocolatecake.org/wp-content/uploads/2015/03/choc.jpg";
var videoDiv, videoAnswer, imageAnswer, cake, singularity, conan;
var oracleDiv, singularityDiv, cakeDiv;

$(document).ready(function() {
  console.log("Your document done loaded");
  videoAnswer = $('#video-answer');
  imageAnswer = $('#image-answer');
  cake = $('#cake').click(handleClick);
  singularity = $('#singularity').click(handleClick);
  conan = $('#conan').click(handleClick);
  videoDiv = $('#video-div');
  oracleDiv = $('#oracle-div *');
  singularityDiv = $('#singularity-div *');
  cakeDiv = $('#cake-div *');
});

function handleClick(event){
  console.log('You done clicked!');
  console.log('event.target is: ' + event.target);
  console.log('event.target.id is: ' + event.target.id);
  switch (event.target.id) {
    case "conan":
      showVideo(conanURL, event.target.id);
      break;
    case "singularity":
      showVideo(singularityURL, event.target.id);
      break;
    case "cake":
      showImage(cakeURL, event.target.id);
      break;
    default:
      alert("Somethin done fucked up!");
  }
}

function showVideo(url, target) {
  videoAnswer.attr('src', url);
  var whatGotClicked = url + "-div";
  switch (whatGotClicked) {
    case "conan-div":

      break;
    case "singularity-div":

      break;
    case "cake-div":

      break;
  }
  videoDiv.show();
}

function showImage(url, target) {
  videoAnswer.hide();
  imageAnswer.attr('src',url);
  videoDiv.show();
}
