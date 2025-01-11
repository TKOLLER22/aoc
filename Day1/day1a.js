const fs = require("fs");

const text = fs.readFileSync("data.txt", "utf8", (error, data) =>{
  if(error){console.log(error)}
});

const splitArr = text.split("\n");
const prepedArr = splitArr.flatMap(item => item.split(/\s+/));
prepedArr.pop();
console.log(prepedArr);

for(var i = 0, i<prepedArr.length, i++){
  if(i%2){
    
  }
}






