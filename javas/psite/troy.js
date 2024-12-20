
document.addEventListener('keydown', (event) => {
   
    if (event.code === 'Space') {
        event.preventDefault(); 
    }
});
/* I was having an issue, where whenever i would press space for the pictures to shuffle, the screen would scroll downward. I googled how to correct it and got the above code. */

const troyPics = [
    { path: 'photos/1.jpg' },
    { path: 'photos/2.jpg' },
    { path: 'photos/3.jpg' },
    { path: 'photos/4.jpg' },
    { path: 'photos/5.jpg' },
    { path: 'photos/6.jpg' },
    { path: 'photos/7.jpg' },
    { path: 'photos/8.jpg' },
    { path: 'photos/9.jpg' },
    { path: 'photos/10.jpg' },
    { path: 'photos/11.jpg' },
    { path: 'photos/12.jpg' },
    { path: 'photos/13.jpg' },
    { path: 'photos/14.jpg' },
    { path: 'photos/15.jpg' },
    { path: 'photos/16.jpg' },
    { path: 'photos/17.jpg' },
    { path: 'photos/18.jpg' },
    { path: 'photos/19.jpg' },
    { path: 'photos/20.jpg' }
];


function setRandomImage() {
    const index = Math.floor(Math.random() * troyPics.length);
    document.body.style.backgroundImage = `url(${troyPics[index].path})`;
    console.log(`url(${troyPics[index].path})`);
   
}


document.addEventListener("DOMContentLoaded", () => {
    setRandomImage(); 
    
    document.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
            setRandomImage(); 
        }
    });
});
