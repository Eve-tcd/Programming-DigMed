let dPics= [
    {
        path:'pug.png',
    },
    {
        path:'lick.jpg',
    },
    {
        path:'sheep.jpg',
    } , 
    {
        path:'nana.jpg',
    },
    {
        path:'fren.png',
    },
    {
        path:'Snoop.png',
    }];

document.addEventListener("DOMContentLoaded", (event) => {
    let generateImage = document.getElementById("generateImage");
    generateImage.addEventListener( "click", (event) => {
        console.log("clicked");
        let dawgPictures = document.getElementById("dawgImage");
        
       let index= Math.floor(Math.random() *dPics.length)
        console.log(index)
       // dawgPictures.src= dPics[index].path;
    document.body.style.backgroundImage = `url(${dPics[index].path})`;
    document.body.style.backgroundSize = "20%"
    
    });


});



