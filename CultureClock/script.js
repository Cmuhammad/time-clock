var noon = 12;

// getting it to show the current time on the page
var showCurrentTine = function() {
    
    // display the string on the on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    //Set hours
    if (hours >= noon) {
        meridian = "PM";
    }
    if (hours > noon) {
        hours = hours -12;
    }

    //Set Minutes
    if (minute < 10) {
        minutes = "0" + minutes;
    }

    //set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // putting together a string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;

};

var updateClock = function() {
    var time = new Date().getHours();
}
