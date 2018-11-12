const uiModul = (() => {

    const title = $("#title");
    const genre = $("#select");
    const length = $("#length");
    const movieList = $("#resdiv")

    const Validate = () =>

        ({

            movieTitle: title.val(),

            movieGenre: genre.val(),

            movieLength: length.val()

        })

    const DisplayMovie = movie => {

        const para = $("<p></p>").text(movie);

        movieList.append(para);

    }

    return {

        Validate,
        DisplayMovie

    }

})()