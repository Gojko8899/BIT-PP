

// Write a function that checks if the first and the last element in the 
// array or string are the same.

function firstAndlast(input1){
    if(input1[0] == input1[input1.length - 1]){
        return 'char are the same'
    }else{
        return 'char are not the same'
    }
}
console.log(firstAndlast([0, 1, 2, 3, 4, 5]))