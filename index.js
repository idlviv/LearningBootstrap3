'use strict';
// function digital_root(n) {
//   var len = n.toString().split('').length - 1;
//   for (var i = 0; i < len; i++) {
//     n = n.toString().split('').map(Number).reduce((a, b) => (a + b));
//   }
//   return n;
// }
//
//
// console.log(digital_root(942));
// // => 9 + 4 + 2
//   // => 15 ...
//   // => 1 + 5
//   // => 6

function duplicateCount(text) {
  var arr = text.toLowerCase().split('');
  var letters = [];
  var index = 0;
  var count = 0;
  var counter = 0;
  arr.forEach(function(itemE, idx) {
    while (index != -1) {
      index = arr.indexOf(itemE, index + 1);
      count++;

    }
    if (count > 2 && !(arr[idx] in letters)) {
      counter++;
      letters.push(arr[idx]);
    }
    console.log(letters);
    index = 0;
    count = 0;
  });
  return counter;
}


console.log(duplicateCount('aabbcde'));