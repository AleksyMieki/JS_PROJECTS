const seconds = document.querySelectorAll('.circle *');


function setDate(){
let now = new Date();

let sec = now.getSeconds();
let secDegrees = ((sec / 60) * 360) + 90;
seconds[0].style.transform = `rotate(${secDegrees}deg)`;

let min = now.getMinutes();
const minDegrees = ((min / 60) * 360) + ((sec/60)*6) + 90;
seconds[1].style.transform = `rotate(${minDegrees}deg)`

const hour = now.getHours();
const hourDegrees = ((hour / 12) * 360) + ((min/60)*30) + 90;
seconds[2].style.transform = `rotate(${hourDegrees}deg)`

}

setInterval(setDate,1000);
