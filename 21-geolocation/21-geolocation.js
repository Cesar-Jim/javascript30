// Only for MAC users!
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  data => {
    speed.textContent = Math.round(data.coords.speed);
    arrow.getElementsByClassName.transform = `rotate(${data.coords.heading})`;
  },
  err => {
    console.err(err);
    alert("Hey!! You gotta allow that to happen!");
  }
);
