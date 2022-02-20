

function countdown (){
    var countdownDate = new Date(2077, 8, 7, 18, 0,0);

var currentTime = new Date();

var distance = countdownDate - currentTime;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
var limit = -48*60*1000;

if (distance <= 0 && distance < limit) {
    document.getElementById("überschrift").innerHTML = "Ab in die Dolomiten!";
    document.getElementById("days_c").style.display = 'none';
    document.getElementById("hours_c").style.display = 'none';
    document.getElementById("minutes_c").style.display = 'none';
    document.getElementById("seconds_c").style.display = 'none';
}
else {
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours)
    document.getElementById("minutes").innerHTML = formatTime(minutes)
    document.getElementById("seconds").innerHTML = formatTime(seconds)
    console.log(days, hours, minutes, seconds)
}
} 
setInterval(countdown, 1000);

function formatTime (time) {
  return time < 10 ? ("0" +time) : time;
    }




