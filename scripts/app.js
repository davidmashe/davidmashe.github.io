var singularityURL = "https://www.youtube.com/embed/it0sf4CMDeM";
var conanURL = "https://www.youtube.com/embed/Oo9buo9Mtos";
var cakeURL = "http://www.howtomakechocolatecake.org/wp-content/uploads/2015/03/choc.jpg";
var videoDiv, videoAnswer, imageAnswer, cake, singularity, conan;

$(document).ready(function() {
  console.log("Your document done loaded");
  videoAnswer = $('#video-answer');
  imageAnswer = $('#image-answer');
  cake = $('#cake').click(handleClick);
  singularity = $('#singularity').click(handleClick);
  conan = $('#conan').click(handleClick);
  videoDiv = $('#video-div');
});

function handleClick(event){
  console.log('You done clicked!');
  console.log('event.target is: ' + event.target);
  console.log('event.target.id is: ' + event.target.id);
  switch (event.target.id) {
    case "conan":
      showVideo(conanURL);
      break;
    case "singularity":
      showVideo(singularityURL);
      break;
    case "cake":
      showImage(cakeURL);
      break;
    default:
      alert("Somethin done fucked up!");
  }
}

function showVideo(url) {
  videoAnswer.attr('src', url);
  videoDiv.show();
}

function showImage(url) {
  videoAnswer.hide();
  imageAnswer.attr('src',url);
  videoDiv.show();
}
