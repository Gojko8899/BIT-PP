
// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
//pitaj Andjelku kako nizove definisati u funkciji ne u parametru?

// function concatenate(array, arrayOne){

// newArrey = [];

// newArrey = array;
 
// for(var i = 0; i < arrayOne.length; i++){
//     var number = arrayOne[i];
//     newArrey[newArrey.length] =number;
//     }
//     return newArrey;
// }

// var result = concatenate([4, 5, 6, 2],[3, 8, 11, 9]);
// console.log(result);


// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// pitati Andjelku kako definisati "element" u samoj funkciji a ne u parametru! 

// function deleting(array, element ){
//     newArray  = [];
    
//     for(var i = 0;i < array.length;i++){
//         var number = array[i];

//         if(number === element){
//             continue;
//         }else{
//             newArray[newArray.length]= number;
//         }
//     }return newArray;
// }
// var result = deleting([4, 6, 2, 8, 2, 2], 6);
// console.log(result);

// Write a program that inserts a given element e on the given position p 
// in the array a. If the value of the position is greater than the array length,
//  print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function insert( array , element, position){
    newArray= [];

    for(var i = 0 , position = 3;position < array.length ,  i < array.length;i++){
        var number = array[i];
        if(position !== element){
            newArray[newArray.length]=number;
        }else{
            newArray[newArray.length] = element;
            newArray[newArray.length] = number;
        }
    }return newArray;

}
var result = insert([2, -2, 33, 12, 5, 8], 78 , 2);
console.log(result);





// var e = 78;
// var p = 3;
// var a = [2, -2, 33, 12, 5, 8];
// var b = [];
// var i = 0;

// if (p < a.length) {
//     while (i < a.length) {
//         if (p !== i) {
//             b[b.length] = a[i];
//         } else {
//             b[b.length] = e;
//             b[b.length] = a[i];
//         }
//         i++
//     }
//     console.log(b);
// } else {
//     console.log("Index is to highi!");

// }



