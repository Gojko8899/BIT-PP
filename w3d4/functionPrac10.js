/*1
Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
    Output array: [ 9, 5, 11, 4]
    */

var replaceElements = (function (array) {
    var i;
    var temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
    return array;
})([4, 5, 11, 9, 69]);

console.log(replaceElements);

/*2
Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 
 */


var ractangle = (function (a, b) {
    return a * b;
})(4, 5);

console.log(ractangle);

/*3
Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
    Output: progra**ing, 2
    */

var replaceLetters = (function (inputArray) {
    var i;
    var newArray = "";
    var counter = 0;

    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === "m" || inputArray[i] === "M") {
            newArray += "*";
            counter++;
        } else {
            newArray += inputArray[i];
        }
    }
    return newArray + " counter is " + counter;
})("programMing");

console.log(replaceLetters);

/*4
Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
    Output: pera.peric@gmail.com
*/

function gmailInput(firstName, lastName) {

    function inner(dot, gmail) {
        var result;
        result = firstName + dot + lastName + gmail;
        return result;
    }
    return inner(".", "@gmail.com");

}

console.log(gmailInput("ivan", "stesic"));

/*5
Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28*/

function octalToDec(number) {
    function inner() {
        return parseInt(number);
    }
    return inner();
}

console.log(octalToDec(024));

/*6
Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

	Input: JSGuru123
    Output: Your password is cool! 
*/


function checksCallback(password, errorCallback, validPassword) {

    var lengthCheck;
    var digitCheck;
    if (password.length >= 6) {
        lengthCheck = true;
    } else {
        lengthCheck = false;
    }

    digitCheck = false;
    for (var i = 0; i < password.length; i++) {
        var character = password[i];
        var value = parseInt(character);

        if (isNaN(value)) {
            digitCheck = true;
            break;
        }
    }

    if (lengthCheck == true && lengthCheck == true) {
        validPassword();
    } else {
        errorCallback();
    }
}

function errorCallback() {
    console.log("password is valid");
};

function validPassword() {
    console.log("Your password is invalid");

};

checksCallback("JSGuru123", validPassword, errorCallback);

/*7
Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/

function checkOdd(num) {
    if (num % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
// fun is checkOdd
function callback(array, fun/*fun is checkOdd*/) {
    var result = [];
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (fun(array[i])) {
            result[index] = array[i];
            index++;
        }
    }
    return result;
}

console.log(callback([2, 8, 11, 4, 9, 3], checkOdd));