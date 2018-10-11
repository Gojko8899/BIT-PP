// Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false

function string(a) {
  if (typeof a === "string") {
    return true;
  } else {
    return false;
  }
}
var b = string("marla");
console.log(b);

// Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function isEmptyString(a) {
  if (a === " ") {
    return true;
  } else {
    return false;
  }
}
var b = isEmptyString(" ");
console.log(b);

// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concatenates(s, a) {
  var i = 0;
  var newString = "";

  do {
    i++;
    newString += s;
  } while (i < a);

  return newString;
}
var b = concatenates("ha-", 4);
console.log(b);

// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function numberOfEmpty(a) {
  var cnt = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] === " ") {
      cnt++;
    }
  }
  return cnt;
}
var b = numberOfEmpty("My random string");
console.log(b);

// Write a function to find the position of the first occurrence of a character in a string.The result should be in human numeration form.If there are no occurrences of the character, the function should return -1.

function counter2(a, b) {
  var i;
  var res;

  for (i = 0; i < a.length; i++) {
    if (a[i] == b) {
      res = i + 1;
      break;
    }
  }
  return res;
}
var c = counter2("gojko", "o");
console.log(c);

// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function counter2(a, b) {
  var i;
  var res;

  for (i = a.length - 1; i < a.length; i--) {
    if (a[i] == b) {
      res = i + 1;
      break;
    }
  }
  return res;
}
var c = counter2("gojkos", "o");
console.log(c);

// Write a function to convert string into an array.
// Space in a string should be represented as “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function convert(a) {
  var i;
  var newString = [];

  for (i = 0; i < a.length; i++) {
    if (a[i] == "string") {
      newString = newString + " ' " + a[i] + " ' ";
    } else if (a[i] == " ") {
      newString = newString + "Null";
    }
  }
  return newString;
}
var c = convert("My Random");
console.log(c);
