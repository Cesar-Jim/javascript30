const people = [
  { name: "John", year: 1988 },
  { name: "Roy", year: 1966 },
  { name: "Fred", year: 1950 },
  { name: "Julie", year: 2011 }
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

/**some and every Checks*/
/**Array.prototype.some --> checks if there is at least one item in the array that matches the criteria*/
// const isAdult = people.some(function(person) {
//   const currentYear = new Date().getFullYear();

//   if (currentYear - person.year >= 18) {
//     return true;
//   }
// });

// /**A simpler way to write the previous code*/
// const currentYear = new Date().getFullYear();
// const isAdult = people.some(person => {
//   return currentYear - person.year >= 18;
// });

/**Even simpler...*/
const isAdult = people.some(
  person => new Date().getFullYear() - person.year >= 18
);

console.log({ isAdult });
/**Array.prototype.every --> checks if all items in the array match the criteria*/
const isAdult2 = people.every(
  person => new Date().getFullYear() - person.year >= 18
);

console.log({ isAdult2 });

/**Find() and findIndex() Checks*/
/**Array.prototype.find() */
/**Find is like filter, but instead returns just the one you are looking for*/
const comment = comments.find(comment => comment.id === 123523);

console.log({ comment });

/**Array.prototype.find() */
/**Find an item within the list and perform some action on it */
const index = comments.findIndex(comment => comment.id === 542328);
console.log(index);
// console.table(comments.splice(index, 1));
console.table(comments);
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.table(newComments);
