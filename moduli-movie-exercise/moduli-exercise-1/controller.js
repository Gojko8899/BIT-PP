const controller = ((ui, data) => {

  $("#addmovie").on("click", () => {

    const movieObj = ui.Validate();
    const movieObject = data.createMovie(movieObj.movieTitle, movieObj.movieGenre, movieObj.movieLength);
    data.addMovie(movieObject);
    ui.DisplayMovie(movieObject.getInfo());

  })

})(uiModul, dataModule)