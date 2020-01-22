// Challenge 1
function addTwo(num) {
    return num+2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word+"s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function multiplyByTwo(num){
   return num*2;
}

function map(arrayNum) {
    
    var result = arrayNum.map(value => {
        return multiplyByTwo(value);
    });
    return result;
}

// console.log(map([1, 2, 3]));

// Challenge 4
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
function char(words){
   alphabet += words;
}
function forEach(letters, char) {
  var storeWord = letters.map(word => {
      return char(word);
  })
};
console.log(alphabet);   //prints 'abcd'

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
var letters = [1,2,3,4];
function callbacks(num){
    return num*2;
  
}

function mapWith(array) {
    var result = array.forEach(value => {
      console.log(value);
        return callbacks(value);
    });
     return result;
}
console.log(mapWith(letters));


//Extension 2
var newInitialValue;
function assignValue(initialValue){
  return newInitialValue = initialValue;
}
function callback(newInitialValue,num){
   return newInitialValue = newInitialValue+num;
}

function reduce(array, callback, initialValue) {
    assignValue(initialValue);
   var sum = array.forEach(value => {
     return callback(newInitialValue,value);
   });
   console.log(sum);
}

//Extension 3
function intersection(arrays) {
  var common = arrays.reduce(function(ary,value){
    
  },[])
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
