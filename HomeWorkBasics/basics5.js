
// Write a function that checks if the two arrays are equal. 
// Assume that arrays are equal if they have all the same elements. 
// Also assume that two compared arrays have the same number of elements.
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [1, 2, 3, 4, 5];

function arraysEqual(array1, array2) {

  
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
var result = arraysEqual([1, 2, 3, 4, 5],[1, 2, 3, 4, 5])
console.log(result);

