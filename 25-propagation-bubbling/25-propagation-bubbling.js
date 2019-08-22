const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  //console.log(this);
  //e.stopPropagation(); // stop bubbling
}

divs.forEach(div =>
  div.addEventListener("click", logText, {
    capture: false,
    once: true
  })
);

button.addEventListener(
  "click",
  () => {
    console.log("Click!!!");
  },
  {
    once: true // useful on store checkouts or click one to purchase
  }
);

// document.body.addEventListener("click", logText);
