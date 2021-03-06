// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var a = [-3, 11, 5, 3.4, -8];


for (let i = 0; i < a.length; i++) {

    a[i] = a[i] * 2;

}

console.log(a);

// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 4

var a = [4, 2, 2, -1, 6]
var min = a[0];

for (var i = 0; i < a.length; i++) {

    if (min > a[i]) {
        min = a[i]
    }
}

console.log(min);
console.log(i - 1);

// Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// // Output: 2

var a = [4, 3, 8, -1, 6]
var i;
var min_element = a[0];
var min_index = 0;
var min2 = a[0];

for (i = 0; i < a.length; i++) {

    if (min_element > a[i]) {
        min_element = a[i]
        min_index = i;
    }
}

for (i = 0; i < a.length; i++) {

    if (min2 > a[i] && a[i] > min_element) {
        min2 = a[i];
    }
}

console.log("Najmanji broj je: " + min_element + ", a odmah zatim " + min2);


// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16 

var a = [3, 11, -5, -3, 2];
var sum = 0;


for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum = sum + a[i];
    }
}
console.log(sum);

// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.

var array = [2, 4, -2, 7, -2, 4, 2,];
var i;
var j;
var result = "The array isn’t symmetric."


for (i = 0, j = array.length - 1; i < j; i++ , j--) {

    if (array[i] === array[j]) {

        result = "The array is symmetric.";
    }
    else {
        result = "The array isn’t symmetric.";
    }
}


console.log(result);


// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var a = [4, 5, 6, 2], b = [3, 8, 11, 9];
var c = [];
var i;
var j;
var counter = 0;

for (i = 0, j = 0; i < a.length, j < b.length; i++ , j++) {

    c[counter] = a[i];
    c[counter + 1] = b[j];

    counter += 2;

}

console.log(c);

// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
c = a;


for (var i = 0; i < b.length; i++) {
    c[c.length] = b[i]
}

console.log(c);


// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

e = 2, a = [4, 6, 2, 8, 2, 2]

for (var i = 0; i < a.length; i++) {

    if (a[i] === e) {
        delete a[i];
    }

}

console.log(a);




// Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]


var e = 78, p = 3, a = [2, -2, 33, 12, 5, 8], b = [];

for (var i = 0; i < a.length; i++) {

    if (p > a.length - 1) {
        b = "Error! Value of the position is greater than the array lenght.";
    }
    else {
        if (i == p) {
            b[i] = e;
            b[i + 1] = a[i];
        }
        else if (i > p) {
            b[i + 1] = a[i];
        }
        else {
            b[i] = a[i];
        }
    }
}

console.log(b);
