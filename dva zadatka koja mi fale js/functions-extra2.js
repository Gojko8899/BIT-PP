// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insert(a, b, c) {
  var i;

  var newString = "";

  for (i = 0; i < a.length; i++) {
    if (i == c) {
      newString = newString + " " + b + "" + a[i];
    } else {
      newString = newString + a[i];
    }
  }
  for (i = 0; i < a.length; i++) {
    if (c == undefined) {
      newString = b + " " + newString;
      break;
    }
  }
  return newString;
}

var b = insert("My random string", "JS");
console.log(b);

// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]
