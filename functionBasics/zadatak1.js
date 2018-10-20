// Write a function that prints all numbers between two provided numbers. 

function numbersBetwen(num1, num2){
   var newArray = '';
   for(var i = num1;i <= num2;i++){
       newArray = newArray + i;
   }
   return newArray;

}
console.log(numbersBetwen(1, 100));
