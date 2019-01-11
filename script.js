const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock() { 
    //  Using the Date object to grab the real time and getHours/Minutes/Seconds methods
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    //  These positions are determined by divding the 360 degrees of the circle by 60(seconds or minutes) or 12 (hours)
    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60); //take current minute add number of seconds to clock then divide into 60 increments
    let secPosition = sec*360/60;


    // Apply these numbers as degrees as inline CSS using transform property
    HOURHAND.style.transform = "rotate(" + hrPosition +  "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition +  "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition +  "deg)";
}

//  setInterval repeatedly calls a function with the default set to milliseconds.
// Every 1 second interval will call the function runTheClock
var interval = setInterval(runTheClock, 1000)
