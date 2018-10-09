// // Nested loops

// var n = 5;
// var v;
// var k;

// for (v = 0; v < n; v++) {

//     if (v == 0 || v == n - 1) {
//         //odstampati n zvezdica
//         var str = "";
//         for (k = 0; k < n; k++) {
//             str += "*";
//         }
//     } else {
//         //odstampati *, n- 2 blanko karaktera, *
//         str = "*";
//         for (k = 1; k <= n - 2; k++) {
//             str += " ";
//         }
//         str += "*";
//     }
//     console.log(str);
//     console.log("\n");
// }

// var n = 13;
// var i;
// var j;
// var s;

// if (n % 2 == 0) {
//     console.log("Pogresna vrednost!");
// } else {
//     for (i = 0; i < n; i++) {
//         s = "";
//         for (j = 0; j < n; j++) {
//             if (i == j || i + j == n - 1) {
//                 s = s + "*";
//             } else {
//                 s = s + " ";
//             }
//         }
//         console.log(s);
//     }
// }

// var n = 5;
// var i;
// var j;
// var s;

// for (i = 0; i < n; i++) {
//     s = "";
//     for (j = 0; j < n; j++) {
//         if (i !== (n - 1) / 2) {
//             if (j !== (n - 1) / 2) {
//                 s += " ";
//             } else {
//                 s += "*";
//             }
//         } else {
//             s += "*";
//         }
//     }
//     console.log(s);

// }

// var arr = [5, 3, 7];
// var picture;

// for (var j = 0; j < arr.length; j++) {
//     picture = drawer(arr[j]);
//     console.log(picture);
// }


// function drawer(num) {
//     if (s !== "") {
//         var s = "";
//     }
//     for (var i = 0; i < num; i++) {
//         s += "*";
//     }
//     return s;
// }





