const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const hours = now.getHours();
  const hoursToDegrees = (hours / 12) * 360 + 90;
  const minutes = now.getMinutes();
  const minutesToDegrees = (minutes / 60) * 360 + 90;
  const seconds = now.getSeconds();
  const secondsToDegrees = (seconds / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;

  console.log(hours);
}

setInterval(setDate, 1000);
