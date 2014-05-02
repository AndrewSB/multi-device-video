onYouTubePlayerReady = initializePlayer;
function initializePlayer(){
var video = document.getElementById('video');
video.loadVideoById(String id , int starttime , string quality);
var playbutton = document.getElementById('playbtn');
playbutton.addEventListener('click' , playVideo());
var pausebutton = document.getElementById('psbtn');
pausebutton.addEventListener('click' , pauseVideo());
}