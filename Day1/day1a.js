const fs = require("fs");

// Read the file synchronously
const text = fs.readFileSync("data.txt", "utf8");

// Split the text into lines and then further split by whitespace
const splitArr = text.split("\n");
const prepedArr = splitArr.flatMap(item => item.split(/\s+/));

// Initialize arrays for even and odd indices
const left = [];
const right = [];

// Split the array into two parts based on the index
for (let i = 0; i < prepedArr.length; i++) {
  if (i % 2) {
    right.push(Number(prepedArr[i]));
  } else {
    left.push(Number(prepedArr[i]));
  }
}

// Sort both arrays
left.sort();
right.sort();

console.log("LEFT ARR -->", left);
console.log("RIGHT ARR -->", right);

// Sum up the values in each array
let count = 0;

for(let j = 0; j < left.length; j++){
  count += Math.abs(left[j] - right[j]);
  result = Math.abs(left[j] - right[j]);
  console.log(left[j], " - ", right[j], " = ", result);
}

console.log("Result:", count);

