const dataModule = (() => {

    const storage = {
        listOfMovies: [],
    }

    class Movie {
        constructor(title, genre, length) {
            this.title = title;
            this.genre = genre;
            this.length = length;

        }
        getInfo() {

            return 'TITLE: ' + this.title + " GENRE: " + this.genre + ' LENGTH: ' + this.length
        }

    }


    class Program {

        constructor(date) {

            this.date = date;

        }



    }

    const createMovie = (title, genre, length) => new Movie(title, genre, length);





    const addMovie = (movie) => {

        storage.listOfMovies.push(movie);

        console.log(storage)

    }

    return {

        createMovie,
        addMovie

    }



})()