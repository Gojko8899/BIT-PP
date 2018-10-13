
// 2.write a function that combines two arrays by alternatingly taking elements.

function vowel(array, array1){
newArrey = [];
var k = 0;

for(i = 0,j = 0;i < array.length && j < array1.length;i++,j++ ){
    newArrey[k]= array[i];
    newArrey[k+1]= array1[j];
    k=k+2;
    }
    return newArrey;
}
var result = vowel(["a" , "b", "c"],[1 , 2 , 3]);
console.log(result);

// Write a function to count vowels in a provided string. 
//If you are  not aware of indexOf function, try to use switch statement.
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 

function vowelIninput(inputString){
    var vowels=[ "a", "A", "e" ,"E" , "i", "I", "o", "O","u" ,"U"];
     var numOfvowels = 0;

     for(i = 0; i < inputString.length;i++){
         var letter = inputString[i];

         for(j = 0; j< vowels.length;j++){
             var vowel = vowels[j];
             if(letter === vowel){
                 numOfvowels++;
             }
         }
     }return numOfvowels
}
var final = vowelIninput("jeca voli prsutu");
console.log(final);