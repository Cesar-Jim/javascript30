const userSequence = [];
const secretCode = "cesar";

window.addEventListener("keyup", e => {
  console.log(e.key);
  userSequence.push(e.key);
  userSequence.splice(-secretCode - 1, userSequence.length - secretCode.length);
  if (userSequence.join("").includes(secretCode)) {
    console.log("DING DING! You found the secret code!");
    cornify_add();
  }
  console.log(userSequence);
});
