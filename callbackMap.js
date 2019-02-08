//Write built-in array map function
//2 arguments: 1st will be array to map and 2nd will be a callback function.
//Function will return a new array based on the results of the callback function.

var words = ["ground", "control", "to", "major", "tom"];

//Map function with 2 parameters: array.names and callbackfunction
function myMap(words, callback) {
//New empty array to store the output
  var results = [];
//Loops through the array
  for (var i = 0; i < words.length; i++) {
//New variable is defined as the callback
  var result = callback(words[i]);
//Push the item to the empty array
    results.push(result);
  }
//Return the results array
  return results;
}

//Call back functions taking 2 parameters: array.names and another callback function with the item as parameter
var wordLength = myMap(words, function callback2(num) {
//Returns length of the name
    return num.length;
});


var wordUpperCase = myMap(words, function callback3(name) {
//Returns the name in uppercase
    return name.toUpperCase();
});

var wordReverse = myMap(words, function callback3(set) {
//Return the words separate from one connected sentence, then backwards and then joined as one word not in separated letter by letter
    return set.split('').reverse().join('');
});

console.log(wordLength);
console.log(wordUpperCase);
console.log(wordReverse);




///Expected Output:
// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]