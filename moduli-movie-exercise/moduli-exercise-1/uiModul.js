var uiModul = (function () {


    var title = $("#title");

    var genre = $("#select");

    var length = $("#length");

    var movieList = $("#resdiv")


    function Validate() {

        var movieTitle = title.val();
        var movieGenre = genre.val();
        var movieLength = length.val();


        return {

            movieTitle: movieTitle,

            movieGenre: movieGenre,

            movieLength: movieLength


        }


    }



    function DisplayMovie(movie) {

        var para = $("<p></p>").text(movie);

        movieList.append(para);


    }


    return {


        Validate: Validate,

        DisplayMovie: DisplayMovie

    }



}())