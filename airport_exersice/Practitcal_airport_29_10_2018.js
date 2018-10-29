// // PRATCTICAL SOS

// // ZADATAK 1

// // function str(s,n){

// // for(i=0; i<s.length; i++){

// //  if(s[i]===n){

// //  return true;

// //  }

// // }

// // return false;

// // }

// // var a="1b895abd";

// // var b="5";

// // var res= str(a,b);

// // console.log(res);

// // ZADATAK 2

// function str(s){

//  var result="";

//  for(i=0; i<s.length; i++){

//  for(j=0; j<s[i]; j++){

//   if(s[i]==="J" && s[i+1]==="S" || s[i]==="S"){

//   result+="*";

//   continue;

//   }

//    result +=s[i];
//  }

//  }

// return result;

// }

// var a= "Programming in JS is sSuper interJSesting";

// var res =str(a);

// console.log(res)

// // ZADATAK 3

// // function str(s,n,l){

// // var result="";

// // for(i=0; i<s.length; i++){

// // if(i===n-1){

// //  result+=l;

// // }

// // result+=s[i];

// // }

// // return result;

// // }

// // var a="Goo morning";

// // var num=4;

// // var lett="d"

// // var res=str(a,num,lett);

// // console.log(res)

// // ZADATAK 4

// // function str(s,n){

// //     var result="";

// //     for(i=0; i<s.length; i++){

// //     if(i!==n){

// //      result+=s[i];

// //     }

// //     }

// //     return result;

// //     }

// //     var a="Goodd morning";

// //     var num=3;

// //     var res=str(a,num);

// //     console.log(res)

// // ZADATAK 5

// // (function(s){

// // var newArr=[];

// // var c=0;

// // for(i=0; i<s.length; i++){

// // if(i%2===0){

// // newArr[c]=s[i];

// // c++;
// // }

// // console.log(newArr)

// // }

// // })([3, 5, 1, 8, 90, -4, 23, 1, 67])

// // ZADATAK 6

// // function arr(s){

// //     var newArray=[];

// //     for(i=0; i<s.length; i++){

// //     if(i<=6 && i>=2){

// //      newArray[i]=s[i]*2;

// //     }else{

// //    newArray[i]=s[i];

// //     }

// //     }

// //     return newArray;

// // }

// // var a=[3, 5, 1, 8, 90, -4, 23, 1, 67];

// // var res=arr(a);

// // console.log(res)

// // ZADATAK 7

// // (function(s,n){

// // console.log((s.hasOwnProperty("x")&&n.hasOwnProperty("x")&& s.x===n.x)&&(s.hasOwnProperty("y")&&n.hasOwnProperty("y")&&s.y===n.y))

// // })( {x: 20, y: 30},{y:30, x: 20})

// // ZADATAK 8

// // function arr(s,n){

// // s= s.sort(function(a, b){return a - b});

// // n=n.sort();

// // var newArr=[];

// // for(i=0; i<s.length; i++){

// //  if(s[i]===n[i]){

// //    newArr[i]=s[i];

// //  }

// // if(n[i]!==newArr[i]){

// //    return false;
// // }

// // }

// // return true

// // }

// // var a= [8, 9, 3, 1, 11, 4, 3];
// // var b= [3, 4, 1, 3];

// // res= arr(a,b);

// // console.log(res)

// // ZADATAK 9

// // (function(s){

// //  var newArray=[];

// //  var temp;
// //  var temp1;

// // var counter=0;

// // for(i=0; i<s.length; i++){

// //   counter=0;

// //  for(j=0; j<s[i].length; j++){

// //  if(s[i][j]==="a"){

// //   counter ++;

// //  }

// //  }
// //  newArray[i]=counter;

// // }

// //  for(k=0; k<s.length; k++){

// //   for(l=0; l<s.length; l++){

// //   if(newArray[l]>newArray[l+1]){

// //      temp=newArray[l];
// //      newArray[l]=newArray[l+1];
// //      newArray[l+1]=temp;

// //      temp1=s[l];
// //      s[l]=s[l+1];
// //      s[l+1]=temp1;

// //   }

// //   }
// //   console.log(newArray)
// //   console.log(s)

// //  }

// // }( ["apple", "tea",  "amazing", "morning", "JavaScript"]))

// // ZADATAK 10

// // function day(s){

// //     var nextDay = new Date(s);
// //     nextDay.setDate(nextDay.getDate()+1);
// //     return nextDay;

// //   }

// // // var day = new Date( "10/10/2018");

// // var res = day("2018-10-10");

// // console.log(res);

// // ZADATAK 11

// // var day = new Date( "10/10/2018");

// // var res = Day(day);

// // console.log(res);

// // function Day(s){

// //   var nextDay = new Date(s);
// //   nextDay.setDate(day.getDate()-1);
// //   return(nextDay);

// // }

// // ZADATAK 12

// // PRACTICAL EXTRA MOVIE FESTIVAL

// // (function(){

// // function Genre(name){

// //   this.name=name;

// //  this.getData= function(){

// //  var firstLetter=this.name[0].toUpperCase();
// //  var lastLetter=this.name[this.name.length-1].toUpperCase();

// //    return  firstLetter+lastLetter;

// //   }

// // }
// // function Movie(title, genre, length) {
// //   this.title = title;
// //   this.genre = new Genre(genre);
// //   this.length = length;

// //   this.getData = function() {
// //     return (
// //       this.title + ", " + this.length + "min" + ", " + this.genre.getData()
// //     );
// //   };
// }

// // function Program (date){

// // this.date=date;
// // this.movies=[];
// // this.totallMoiveprogram=0;
// // var counter=0;
// // var counter1=0;
// // var sum=0;

// // this.addMovie= function(movie){

// //  sum+=(movie.length);

// //  if(movie.genre.getData()==="CY"){

// //   counter++;
// //  }
// //  if(movie.genre.getData()==="AN"){

// //   counter1++;

// //  }

// // if(counter<=4 && counter1<=4 && sum<=400){

// // this.movies.push(movie);
// // this.totallMoiveprogram ++;
// // }

// // }
// // this.getData= function(){

// // var totallLength=0;
// // var allMoviesData="";
// // var programRes="";

// // for(var k=0; k<this.movies.length; k++){

// //         allMoviesData+="\t\t"+this.movies[k].getData()+"\n";

// // }

// // for(var i=0; i<this.movies.length; i++){

// //         totallLength+=this.movies[i].length;

// // }

// // programRes="\t"+this.date+", "+"program duration"+" "+totallLength + "min" +"\n"+allMoviesData;

// // return programRes;
// // }

// // }
// // function Festival (name){

// // this.name=name;
// // this.listOfPrograms=[];
// // this.numOfmovies=0;

// // this.totalNumOfProgram=0;

// // this.addProgram= function(Program){

// //  this.numOfmovies +=Program.totallMoiveprogram;

// //  if(this.numOfmovies<6){

// //   this.listOfPrograms.push(Program);
// //   this.totalNumOfProgram++

// //  }

// // }
// // this.getData= function(){

// // if(this.totalNumOfProgram!==0){

// // var ar="";
// // for(var c=0; c<this.listOfPrograms.length; c++ ){

// //      ar+=this.listOfPrograms[c].getData();

// // }

// //  return this.name+" "+ "has" +" "+this.numOfmovies+" "+"movie titles"+"\n"+ar;

// // }else{

// //  return this.name + "\n" + "Program to be announced";

// // }

// // }

// // }

// // function CreateMoive(title,length,genre){

// // return new Movie(title,length,genre);

// // }

// // function CreateProgram(date){

// // return new Program(date);

// // }

// // try {
// //     var movieTitle = "Prestige";
// //     var movieGenre = "Mistery";
// //     var movieLength = 140;

// //     if (
// //         typeof movieLength === "string" ||
// //         isNaN(movieLength) !== false ||
// //         !movieLength === true
// //       ) {
// //         throw new Error("Input is not a number");
// //       }
// //       else{
// //         var Prestige= CreateMoive(movieTitle,movieGenre,movieLength);

// //       }
// // }

// // var Ring=CreateMoive("Ring", "Horror",90);
// // var SecondDay= CreateProgram("20.12.2020");
// // SecondDay.addMovie(Prestige);
// // SecondDay.addMovie(Ring);

// // var Shawshank = new Movie("The Shawshank Redemtion", "action",140);
// // var StepBrothers = new Movie("Step Brothers", "comedy",90);
// // var StepBrothers = new Movie("Step Brothers", "comedy",90);
// // var CableGuy = new Movie("CableGuy", "comedy",80)
// // var KillBill= new Movie("Kill Bill", "action", 110);

// // var Action= new Program("28.10.2018");
// // var Comedy= new Program("29.10.2019");

// // var CanFest= new Festival("CanFest");

// // Action.addMovie(Shawshank);
// // Action.addMovie(KillBill);
// // Comedy.addMovie(StepBrothers);
// // Comedy.addMovie(StepBrothers);
// // Comedy.addMovie(CableGuy);
// // CanFest.addProgram(Comedy);
// // CanFest.addProgram(Action);
// // CanFest.addProgram(SecondDay);

// // // console.log(Action.getData())
// // // console.log(Comedy.getData())
// // console.log(CanFest.getData())

// // })()

// // function arr(arr, index) {
// //   try {
// //     if (index < 0) {
// //       throw new RangeError("Number must be greater than zero!");
// //     }
// //     if (index > arr.length) {
// //       throw new RangeError("input smaller number");
// //     } else {
// //       console.log(arr[index]);
// //     }
// //   } catch (error) {
// //     console.log(error.message);
// //   }
// // }
// // console.log(arr([2, 4, 7, 5, 6], 6));

// (function() {
//   function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;

//     this.getData = function() {
//       return this.name + " " + this.surname;
//     };
//   }

//   function Seat(number, category) {
//     this.number = number;
//     this.category = category;
//     if (category == undefined) {
//       this.category = "e";
//     }
//     if (number == undefined) {
//       this.number = Math.floor(Math.random() * 100 + 10);
//     }

//     this.getData = function() {
//       return this.number + ", " + this.category.toUpperCase();
//     };
//   }

//   function Pasanger(person, seat) {
//     this.person = person;
//     this.seat = seat;

//     this.getData = function() {
//       return seat.getData() + " " + person.getData();
//     };
//   }

//   function Flight(relation, date) {
//     this.relation = relation;
//     this.date = new Date(date);
//     this.listOfPasengers = [];

//     this.addPassenger = function(passenger) {
//       this.listOfPasengers.push(passenger);
//     };
//   }

//   function Airport(name) {
//     this.name = "Nikola Tesla";
//     this.listOfFlights = [];

//     this.addFlight = function(flight) {
//       this.listOfFlights.push(flight);
//     };
//   }

//   var gojko = new Person("Gojko", "Vilic");
//   var seat1 = new Seat();

//   console.log(seat1);
//   var pass1 = new Pasanger(gojko, seat1);

//   var flight1 = new Flight("Beograd-Paris", "10-10-2018");

//   var NikolaTesla = new Airport();

//   flight1.addPassenger(pass1);
//   NikolaTesla.addFlight(flight1);

//   console.log(NikolaTesla);
// })();
