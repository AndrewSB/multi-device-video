var io = require("socketio");
var video_id;

function RoomController($scope) {
    var socket = io.connect();
    $scope.messages = [];
    $scope.roster = [];
    $scope.name = '';
    $scope.text = '';
    $scope.session = '';

    socket.on('connect', function () {
        $scope.setName();
    });

    socket.on('message', function (msg) {
        //$scope.messages.push(msg);
        $scope.messages=[msg];
        $scope.$apply();
    });

    socket.on('roster', function (names) {
        $scope.roster = names;
        $scope.$apply();
    });

    $scope.send = function send() {
        console.log('Sending message:', $scope.text);
        var patt = new RegExp("v=.*");
        var regexMatch = patt.exec(String($scope.text));
        var url = String(regexMatch).substring(2);
        var video_id = url;
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) { video_id = video_id.substring(0, ampersandPosition); }
        var videoTitle;
        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+ video_id +'?v=2&alt=jsonc',function(data,status,xhr){
            videoTitle = data.data.title;
            socket.emit('message', videoTitle);
            //TODO Create new 'ooroom' with their chosen $scope.name
            //TODO Redirect user to said videoroom
            $scope.text = '';
            createRoom(video_id);
        });
    };

    $scope.setName = function setName() {
        socket.emit('identify', $scope.name);
    };
}
      
    function getScreenDimensions(){
        var height = screen.height;
        var width =  screen.width;
        alert("dimensions are " + height + "x" + width);
    }
    
    function createRoom(videoID) {
        video_id = String(videoID);
        alert("Video ID: " + video_id);
    }
    
    function joinRoom(){
        window.location = "https://socketio-c9-wh116.c9.io/blank.html?v=" + video_id;
    }
    
    function onloaded(id){
        var html = "<iframe width="+screen.width+" height=" + screen.height + " id=\"video\" src=\"//www.youtube.com/embed/" + id + "?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>";
        document.getElementById("html").innerHTML = html;
        
        
    }
