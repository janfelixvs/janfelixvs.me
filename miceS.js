// Mice Days Countre

var October = new Date("Oct 28, 2021 12:20:00").getTime();

var timerOctober = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = October - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    document.getElementById("daysOct").innerHTML = days
    document.getElementById("hoursOct").innerHTML = hours
})
