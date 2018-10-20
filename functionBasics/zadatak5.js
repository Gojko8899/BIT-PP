

//Write a function that checks if the two arrays are equal.
// ne razumem zadatak/proveri


function arraysEqual(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

var result = arraysEqual([-2, 0, 5], [-2, -1, 5]);
console.log(result);
