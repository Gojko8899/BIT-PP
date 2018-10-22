//Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

//12345 -> 54321

// function reverse(inputArray) {
//   var ar;

//   ar = new String(inputArray);

//   ar = ar.split("").reverse();

//   ar = ar.join("");

//   return ar;
// }

// var s = 12345;
// var res = reverse(s);
// console.log(res);

// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
//“Webmaster” -> “abeemrstw”

// function reverse(inputString) {
//   var ar;
//   ar = inputString
//     .split("")
//     .sort()
//     .join();

//   ar = ar.toLowerCase();

//   return ar;
// }

// var s = "Webmaster";
// var res = reverse(s);
// console.log(res);

// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the
//  letters so they are sorted from A to Z.
//"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

// function alphabetize(inputString) {
//   var arr;

//   arr = inputString.split(" ");

//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i]
//       .split("")
//       .sort()
//       .join("");
//   }
//   arr = arr.join(" ");

//   return arr;
// }
// var res = alphabetize("Republic Of Serbia");
// console.log(res);

// Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ]

// function strinToArray(inputString) {
//   var arr = inputString;
//   arr = arr.split(" ");

//   return arr;
// }
// var res = strinToArray("Jonh Snow");
// console.log(res);

// Write a function to convert a string to its abbreviated form.

// 	"John Snow" -> 	"John S."

// function abbreviated(inputString) {
//   var str = inputString;

//   str = str.split(" ").join(" ");
//   str = str.slice(0, 6) + ".";

//   return str;
// }
// var res = abbreviated("Jonh Snow");
// console.log(res);

// Write a function that can pad (left, right) a string to get to a determined length.

// 	'0000', 123, 'l' -> 0123
// '00000000', 123, 'r' -> 12300000

// function removeAdd(num1, num2) {
//   var num;
//   var num = num2 + "";
//   var par;

//   par = num1
//     .split("")
//     .slice(num.length, num1.length)
//     .join("");

//   return (num += par);
// }
// var res = removeAdd("00000000", 123);
// console.log(res);
console.log(new Date());
