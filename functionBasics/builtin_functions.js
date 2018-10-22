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


// Write a function to capitalize the first letter of a string and
// returns modified string.

// "js string exercises" -> "Js string exercises"
//var uppercaseFirstLetter = string.charAt(0).toUpperCase()

function capitalizefirst(inputString){
    var sliced = inputString.slice(1, inputString.length)

    var uppercasefirst = inputString.charAt(0).toUpperCase();

  
    return uppercasefirst + sliced;
}
var res = capitalizefirst("js string exercises");
console.log(res);

// Write a function to hide email addresses to protect them from unauthorized 
// users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com"

protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("robin_singh@example.com"));









// Write a program that accepts a string as input and swaps the case of 
// each character. For example, if you input 'The Quick Brown Fox', 
// the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"


function swap(inputString){
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var newString = [];
    lower = lower.split('')
    upper = upper.split('')
    inputString = inputString.split('')


    for(var i = 0; i < inputString.length; i++){
        if(inputString[i] == upper[i] ){
            newString[i] += lower[i]; 
        }
        
    }

    return newString;
}
var res = swap('The Quick Brown Fox');
console.log(res);


// resenje za 10. zadatak.
// str = 'The Quick Brown Fox';
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// var result = [];
  
//   for(var x=0; x<str.length; x++)
//   {
//     if(UPPER.indexOf(str[x]) !== -1)
//     {
//       result.push(str[x].toLowerCase());
//     }
//     else if(LOWER.indexOf(str[x]) !== -1)
//     {
//       result.push(str[x].toUpperCase());
//     }
//     else 
//     {
//       result.push(str[x]);
//     }
//   }
// console.log(result.join(''));



