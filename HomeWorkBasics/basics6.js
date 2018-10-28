
// Write a function that reverses a word or sentence. Cover cases if sentence
//  is not provided


function reverse(inputstring){
    var newArray = "";
    for(var i = inputstring.length -1;i >= 0 ; i--){
        newArray +=inputstring[i];
       
       }
    return newArray;
}
console.log(reverse('vilic'));

