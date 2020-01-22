// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
var mergedAray = arrays.flat();
console.log(mergedAray);
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
// a value, a test function, an update function, and a body function
loop(3, n => n > 0, n => n - 1, console.log);
function loop(value,testFunction,update,bodyfunction){
  {if(testFunction){
    bodyfunction(value);
  }else{
    return false;
  }-----------------------------------------------------error 
}
}
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  // Your code here.
  test = array.filter(val => {
    return val<10;
  });
  if(array.length == test.length){
    console.log("true");
  }else {
    console.log("flase");
  }
  console.log(test);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
