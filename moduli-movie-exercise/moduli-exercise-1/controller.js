var controller = (function (ui, data) {



  $("#addmovie").on("click", function () {


    var movieObj = ui.Validate();


    var movieObject = data.createMovie(movieObj.movieTitle, movieObj.movieGenre, movieObj.movieLength);
    
    data.addMovie(movieObject);
    ui.DisplayMovie(movieObject.getInfo());


  })






})(uiModul, dataModule)