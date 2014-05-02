module.exports = {
  youtubeFinder: function () {
    var YouTubePlayer = require('youtube-player');
    var p = new YouTubePlayer({id: 'playerElementId', width: 400, height: 300});
    p.play('moSFlvxnbgk');
    
  }
};
