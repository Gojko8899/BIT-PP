// Write a function that replaces all white spaces with dash (-)


function dashes(inputString){
    var newArray = '';
    for(var i = 0; i < inputString.length; i++){
        if(inputString[i] == ' '){
            newArray += '-';
        }else{
            newArray += inputString[i]
        }
    } 
    return newArray;
}
var result = dashes('some random input string');
console.log(result);