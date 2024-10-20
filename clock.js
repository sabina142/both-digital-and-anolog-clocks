 hrs = document.querySelector("#hrs");
sec = document.querySelector("#sec");
 min = document.querySelector("#min");

setInterval(() => {
  let d = new Date();
  let hh = d.getHours() * 30;/*each hour has to rotate 30 deg  360/12=30*/
  let mm = d.getMinutes() * 6; 
  let ss = d.getSeconds() * 6;

  hrs.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});

// digital clock
function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";/*h>=12 its value pm otherwise am*/

  document.getElementById("hours").textContent = formatTime(hours % 12 || 12);
  document.getElementById("minuts").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
  document.getElementById("ampm").textContent = ampm;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;  /*in digital format 8 is single digit so we need to add 08*/
}

setInterval(updateClock, 1000);
updateClock();
