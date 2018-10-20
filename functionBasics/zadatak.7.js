


//Write a function that prints out number of input arguments of the function.


function numOfArguments(){
    return arguments.length;
}

var result = numOfArguments(5, 6, 7, 8)
console.log(result);