// getting it to show the current time on the page
const showCurrentTine = function() {
    
    // display the string on the on the webpage
    let clock = document.getElementById('clock');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

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
    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;

};