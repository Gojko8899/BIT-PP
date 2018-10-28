// Write a function that outputs array of every second character  
// from the provided string. In case that string is not provided outputs 
// array empty array. 

function everySecChar(inputString){
    var newArray = [];
    var index = 0;
    for(var i = 0;i < inputString.length; i+=2){
        newArray=newArray + inputString[i];
    }
    if(inputString == ''){
        newArray = newArray[i]
    }
    return newArray;
}
console.log(everySecChar('some string'));



