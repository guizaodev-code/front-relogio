const getHour = () => {

var clock = new Date();

var hour = clock.getHours().toString().padStart(2, '0');;
var minute = clock.getMinutes().toString().padStart(2, '0');;
var second = clock.getSeconds().toString().padStart(2, '0');;

var hourElement = document.getElementById("hour");
var minuteElement = document.getElementById("minute");
var secondElement = document.getElementById("second");



hourElement.textContent = `${hour}`
minuteElement.textContent = `${minute}`
secondElement.textContent = `${second}`

}

setInterval(getHour, 1000);