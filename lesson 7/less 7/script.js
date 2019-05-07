function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}



function startTime () {
  let date = new Date();
  let hour = addZero(date.getHours());
  let minutes = addZero(date.getMinutes());
  let seconds = addZero(date.getSeconds());
  let time = document.getElementById('time');

  time.innerHTML = hour + ":" + minutes + ":"+ seconds;

 
}
setInterval(startTime, 1000);

startTime();