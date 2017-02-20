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

// function duplicateCount(text) {
//   var arr = text.toLowerCase().split('');
//   var letters = [];
//   var index = 0;
//   var count = 0;
//   var counter = 0;
//   arr.forEach(function(itemE, idx) {
//     while (index != -1) {
//       index = arr.indexOf(itemE, index + 1);
//       count++;
//
//     }
//     if (count > 2 && !(arr[idx] in letters)) {
//       counter++;
//       letters.push(arr[idx]);
//     }
//     console.log(letters);
//     index = 0;
//     count = 0;
//   });
//   return counter;
// }
//
//
// console.log(duplicateCount('aabbcde'));

// function spinWords(text){
//   var revArr = [];
//   text.split(' ').map(function(item) {
//       if (item.split('').length > 4) {
//       revArr.push(item.split('').reverse().join(''));
//     }
//     else {
//       revArr.push(item);
//     }
//   });
//   return revArr.join(' ');
// }
//
// console.log( spinWords( "Hey fellow warriors" ) );;

// function fib(n) {
//   return n <=1 ? n : fib(n-1) + fib(n-2);
// }
//
// alert( fib(3) ); // 2
// alert( fib(7) ); // 13

// function zero(t) {return eval(t ? 0 + t : 0)}
// function one(t) {return eval(t ? 1 + t : 1)}
// function two(t) {return eval(t ? 2 + t : 2)}
// function three(t) {return eval(t ? 3 + t : 3)}
// function four(t) {return eval(t ? 4 + t : 4)}
// function five(t) {return eval(t ? 5 + t : 5)}
// function six(t) {return eval(t ? 6 + t : 6)}
// function seven(t) {return eval(t ?  7 + t  : 7)}
// function eight(t) {return eval(t ? 8 + t : 8)}
// function nine(t) {return eval(t ? 9 + t : 9)}
//
// function plus(n) {return '+' + n }
// function minus(n) {return '-' + n }
// function times(n) {return '*' + n }
// function dividedBy(n) {return  '/' + n }
//
//
//
// console.log( seven( times( five() ) ) ); // must return 35
// console.log( four( plus( nine() ) ) ); // must return 13
// console.log( eight( minus( three() ) ) ); // must return 5
// console.log( six( dividedBy( two() ) ) ); // must return 3

// function toCamelCase(str){
//   var k = 0;
//   var camel = [];
//   str.split('').map(function(item) {
//     if (item === '-' || item === '_') {
//       k = 1;
//     }
//     else {
//       if (k === 1) {
//         camel.push(item.toUpperCase());
//         k = 0;
//       } else {
//         camel.push(item);
//       }
//     }
//   });
//   return camel.join('');
// }
//
//
//
// // returns "theStealthWarrior"
// console.log( toCamelCase( "the-stealth-warrior" ) );
//
// // returns "TheStealthWarrior"
// console.log( toCamelCase( "The_Stealth_Warrior" ) );

function createPhoneNumber(numbers){

}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"
