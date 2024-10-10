let moviePosters= ["https://cdn.posteritati.com/posters/000/000/037/966/the-silence-of-the-lambs-sm-web.jpg","https://i.ebayimg.com/00/s/MTYwMFgxMDc5/z/SQcAAOSwBxhkOA-s/$_57.JPG?set_id=880000500F"];

document.addEventListener("DOMContentLoaded", (event) => {
    let randomMovieButton = document.getElementById("generate-image");
    randomMovieButton.addEventListener( "click", (event) => {
        console.log("clicked");
        let moviePosterImage = document.getElementById("movie-poster-image");
        moviePosterImage.setAttribute("src", moviePosters[0]);
    });

});

