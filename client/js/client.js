var io = require("socketio");

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
        $scope.messages.push(msg);
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
            //TODO Create new 'videoroom' with their chosen $scope.name
            //TODO Redirect user to said videoroom
            $scope.text = '';
            createRoom(String($scope.name), videoTitle);
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
    function createRoom(roomName, videoID) {
        alert(String(roomName));
        //socket.join(roomName);
    }
        
    function joinRoom(){
        //TODO socket.join
        //TODO refresh page/redirect
        alert('Ayyyy room hit');
    }