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

// Part 2: Expanding Functionality
/**
Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.
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

// Part 3
/** Part 3: Transforming Data
While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself. When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.
In order to make it more obvious what the data is, we will transform our rows into objects.
Implement the following:
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
Important: While this functionality can be built into the original CSV parser you built in Part 2, we are intentionally creating two different algorithms to test different skillsets. Please leave these sections separate even if it would be more efficient to combine them.
 */

let keysMapped = arrObjectPeople.map((item) => {
  return {
    id: item.ID,
    name: item.Name,
    occupation: item.Occupation,
    age: item.Age,
  };
});

console.log("Mapped keys to small cases", keysMapped);

// Part 4: Sorting and Manipulating Data
/**
 * It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
Using array methods, accomplish the following tasks, in order upon the result of Part 3:
 */

// 1. Remove the last element from the sorted array.
keysMapped.pop();
// 2. Insert the following object at index 1:
let newObjectAt = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
keysMapped.splice(1, 0, newObjectAt);
// 3. Add the following object to the end of the array:
let newObjectLast = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
keysMapped.push(newObjectLast);

// console.log("Part4", keysMapped);

// 4. Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

let sum = 0;
const arrSize = keysMapped.length;
for (let i = 0; i < arrSize; i++) {
  const age = parseInt(keysMapped[i].age);
  sum += age;
}
const average = sum / arrSize;
console.log("The average of the ages is :", average);

// Part 5: Full Circle
/**
As a final task, transform the final set of data back into CSV format.
There are a number of ways to do this; be creative!
 */
