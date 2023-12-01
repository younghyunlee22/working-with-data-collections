// Part 1: Refactoring Old Code

const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let splitString = csvData.split("\n");
let twodArray = [];
splitString.forEach((string) => {
  twodArray.push(string.split(","));
});

console.log("1", twodArray);

// using a for loop
let arrRows = csvData.split("\n");

let arrResult = [];

for (let i = 0; i < arrRows.length; i++) {
  let currentRow = arrRows[i];
  arrResult.push(currentRow.split(","));
}

console.log("2", arrResult);

// Part 2
/**
 * Declare a variable that stores the number of columns in each row of data within the CSV.
 *
 */

let rows = csvData.split("\n");

let arrDataTwoD = [];

for (let i = 0; i < rows.length; i++) {
  let currentRow = rows[i];
  let innerArray = [];
  let currentColumnData = "";

  for (let j = 0; j <= currentRow.length; j++) {
    let currentChar = currentRow[j];
    if (currentChar === "," || j === currentRow.length) {
      innerArray.push(currentColumnData);
      currentColumnData = "";
    } else {
      currentColumnData += currentChar;
    }
  }

  arrDataTwoD.push(innerArray);
}

console.log("3", arrDataTwoD);

// Part 3
let heading = rows[0];
let arrHeading = heading.split(",");
console.log("Heading", arrHeading);

const columnHeaders = rows[0].split(",");

let arrObjectPeople = [];
for (let i = 1; i < rows.length; i++) {
  let columnData = rows[i].split(",");
  let dataObject = {};
  for (let j = 0; j < columnHeaders.length; j++) {
    const key = columnHeaders[j];
    dataObject[key] = columnData[j];
  }
  arrObjectPeople.push(dataObject);
}

console.log("Array of Objects", arrObjectPeople);

// Part 4

let keysMapped = arrObjectPeople.map((item) => {
  return {
    id: item.ID,
    name: item.Name,
    occupation: item.Occupation,
    age: item.Age,
  };
});

console.log("Mapped keys to small cases", keysMapped);
