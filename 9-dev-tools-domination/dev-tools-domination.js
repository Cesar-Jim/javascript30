const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello!");

// Interpolated
console.log("Hello I am a %s man", "nice");

// Styled
console.log(
  "%c I am some great text",
  "font-size: 30px; background: blue; text-shadow: 2px 2px 2px white;"
);

//Warning!
console.warn("Oh noooooo!");

//Error
console.error("Fatal Error!");

//Information
console.info("Crocodiles eat 3-4 people per year");

//Testing
console.assert(1 === 2, "That is wrong!"); // only fire if something is wrong!

//Clearing
console.clear(); // clears the console

//Viewing DOM elements
const p = document.querySelector("p");
console.log(p);
console.dir(p);

console.clear();

//Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} human years old.`);
  console.groupEnd(`${dog.name}`);
});

//Counting
console.count("hugo");
console.count("hugo");
console.count("Cesar");
console.count("Cesar");
console.count("Cesar");
console.count("hugo");
console.count("hugo");
console.count("Cesar");
console.count("Cesar");
console.count("Cesar");
console.count("Cesar");
console.count("hugo");
console.count("hugo");
console.count("hugo");
console.count("hugo");

//Timing
console.time("fetching data");
fetch("https://swapi.co/api/")
  .then(res => res.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });

//Display as a table
console.table(dogs);
