var dataModule = (function () {

    var storage = {
        listOfMovies: [],
    }

    function Movie(title, genre, length) {

        this.title = title;
        this.genre = genre;
        this.length = length;

    }

    Movie.prototype.getInfo = function () {

        return 'TITLE: ' + this.title + " GENRE: " + this.genre + ' LENGTH: ' + this.length


    }

    function createMovie(title, genre, length) {


        return new Movie(title, genre, length)

    }


    function addMovie(movie) {

        storage.listOfMovies.push(movie);

        console.log(storage)

    }


    return {

        createMovie: createMovie,
        addMovie: addMovie

    }



}())