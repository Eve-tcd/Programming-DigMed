let troyPictures= ["troy/afro.jpeg","troy/ball.jpeg","troy/xmas.jpeg","troy/pup.jpeg"];

document.addEventListener("DOMContentLoaded", (event) => {
    let randomMovieButton = document.getElementById("generate-image");
    randomMovieButton.addEventListener( "click", (event) => {
        console.log("clicked");
        let moviePosterImage = document.getElementById("troy-The-Boy");
        
       let index= Math.round(Math.random() *troyPictures.length)
        console.log(index)
        moviePosterImage.setAttribute("src", troyPictures[index]);
    });


});
