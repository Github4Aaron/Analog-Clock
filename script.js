const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//  These lets will contain the degrees to move the clock arms to correspond with actual time.
let hrPosition = 20;
let minPosition = 130;
let secPosition = 147;

// Apply these numbers as degrees as inline CSS using transform property

HOURHAND.style.transform = "rotate(" + hrPosition +  "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition +  "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition +  "deg)";
