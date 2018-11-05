var movieList = [];
var progList = [];

// CREATE MOVIE

document.querySelector("#addmovie").onclick = function() {
  var title = document.querySelector("#title").value;
  var length = document.querySelector("#length").value;
  var genre = document.querySelector("#select").value;

  var genreObj = new Genre(genre);
  var movie = new Movie(title, genreObj, length);

  movieList.push(movie);

  var output = "<ul>";

  for (i = 0; i < movieList.length; i++) {
    output += "<li>";

    output += movieList[i].getData();

    output += "</li>";
  }
  output += "</ul>";

  document.querySelector("#resdiv").innerHTML = output;

  //   ADD MOVIE TO MOVIE LIST

  var output1 = "<select>";

  for (j = 0; j < movieList.length; j++) {
    output1 += "<option value='" + j + "'>";

    output1 += movieList[j].getData();

    output1 += "</option>";
  }

  output1 += "</select>";

  document.querySelector("#movlistdiv").innerHTML = output1;
};

// CREATE PROGRAM

document.querySelector("#createprogram").onclick = function() {
  var date = document.querySelector("#datelbl").value;

  var dateObj = new Date(date);

  var program = new Program(dateObj);

  progList.push(program);

  var output2 = "<ul>";

  for (k = 0; k < progList.length; k++) {
    output2 += "<li>";

    output2 += progList[k].getData();

    output2 += "</li>";
  }
  output2 += "</ul>";

  document.querySelector("#progdiv").innerHTML = output2;

  // ADD PROGRAM TO THE PROGRAM LIST

  var option3 = "<select>";

  for (c = 0; c < progList.length; c++) {
    option3 += "<option value='" + c + "'>";
    option3 += progList[c].getData();
    option3 += "</option>";
  }
  option3 += "</select>";

  document.querySelector("#proglistdiv").innerHTML = option3;
};

// ADD MOVIE TO PROGRAM LIST

var movieObj;
var programObj;

document.querySelector("#addMovieToProgram").onclick = function() {
  var selectedMovieIndex = document.querySelector("#movlistdiv").value;
  var selectedProgramIndex = document.querySelector("#proglistdiv").value;

  programObj = progList[selectedProgramIndex];
  movieObj = movieList[selectedMovieIndex];

  programObj.addMovie(movieObj);

  console.log(programObj);
};
