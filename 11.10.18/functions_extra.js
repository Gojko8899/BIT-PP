// Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false

function string(a) {
  var i;
  var provera;
  if (typeof a == "string") {
    provera = "true";
  } else {
    provera = "false";
  }
  return provera;
}
var res = string(454);
console.log(res);

// Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function blank(a) {
  var i;
  var res;
  if (a == " ") {
    res = "true";
  } else {
    res = "false";
  }
  return res;
}
var b = blank(" ");
console.log(b);

// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concatenates(a, b) {
  var i = 0;
  var res = " ";
  do {
    i++;
    res = res + a;
  } while (i < b);
  return res;
}
var b;
b = concatenates("ha-", 5);
console.log(b);

// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function counter(a, letter) {
  var i;
  var res = 0;
  var e = [];
  e = a;
  for (i = 0; i < e.length; i++) {
    if (e[i] == letter) {
      res++;
    }
  }
  return res;
}
var b;
b = counter("asas44a", "a");
console.log(b);

// Write a function to find the position of the first occurrence of a character in a string.
// The result should be in human numeration form. If there are no occurrences of the character,
//  the function should return -1.

function counter2(a, b) {
  var i;
  var res;
  // var niz = [];
  // niz = a;

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
