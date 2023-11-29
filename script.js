// Part 1: Refactoring Old Code

const string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let splitString = string.split("\n");
let twodArray = [];
splitString.forEach((string) => {
  twodArray.push(string.split(","));
});

console.log(twodArray);
