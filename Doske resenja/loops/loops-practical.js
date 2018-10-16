



// Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (let i = 0; i <=15 ; i++ ){

    if (i % 2 === 0){
        console.log(i + ": This number is even");
    } else {
        console.log(i + ": This number is odd");
    }

}

// Write a program to sum the multiples of 3 and 5 under 1000.

for (var i = 0; i<1000; i++){

    i = i * (3 * 5)

    console.log(i)

}


// Write a program to compute the sum and product of an array of integers.

var arr = [1, 10, 15, 9];
var sumOfArr = 0;
var productOfArr = 1;

for (let i = 0; i<arr.length; i++){
    sumOfArr += arr[i];
    productOfArr *= arr[i];
}

console.log(sumOfArr);
console.log(productOfArr);


// Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var xString = "";

for(let i = 0; i<x.length; i++){
    xString += x[i];
}
console.log(xString);

// Write a program that prints the elements of the following array.

var a = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
    ];
for (let i = 0; i < a.length; i++) {
    var element = a[i];
    console.log(element);
}

// Write a program that outputs the sum of squares of the first 20 numbers. 

for (let i = 1; i <= 20; i++) {
    var squares = i * i
    console.log(squares);
    
}


// Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
	
// David    80
// Marko    77
// Dany     88
// John     95
// Thomas   68

// The grades are computed as follows :
// < 60%    F
// < 70%    D
// < 80%    C
// < 90%    B
// < 100%   A

var david = 80, marko = 77, dany = 88, john = 95, thomas = 68;

var marksOfStudent = [david, marko, dany, john, thomas];
var sumOfArr = 0
var averageMarks = 0;

for (let i = 0; i < marksOfStudent.length; i++) {

    sumOfArr += marksOfStudent[i];
    averageMarks = sumOfArr / marksOfStudent.length
    
}

console.log("Average marks for this students is: " + averageMarks);

var F = averageMarks * 60 / 100
var D = averageMarks * 70 / 100
var C = averageMarks * 80 / 100
var B = averageMarks * 90 / 100
var A = averageMarks * 100 / 100

// console.log(F);
// console.log(D);
// console.log(C);
// console.log(B);
// console.log(A);


for (let i = 0; i < marksOfStudent.length; i++) {
    
    if (marksOfStudent[i] <= F){
        console.log("For students " + (i+1) + " mark is F");         
    } 
    else if (marksOfStudent[i] > F && marksOfStudent[i]<= D){
        console.log("For students " + (i+1) + " mark is D");         
    }
    else if (marksOfStudent[i] > D && marksOfStudent[i]<= C){
        console.log("For students " + (i+1) + " mark is C");         
    }
    else if (marksOfStudent[i] > C && marksOfStudent[i]<= B){
        console.log("For students " + (i+1) + " mark is B");         
    }
    else if (marksOfStudent[i] > B ){
        console.log("For students " + (i+1) + " mark is A");     
    }
}



// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).


for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0){
        console.log(i + " Fizz");
    } 
    else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i + " Buzz");
    }

    if (i % 3 === 0 && i % 5 === 0){
        console.log(i + " FizzBuzz");
        
    } 
}

