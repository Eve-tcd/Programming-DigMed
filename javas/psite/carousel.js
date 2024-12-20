
let images;
let currentIndex = 0;

const carouselImage = document.getElementById('travel-image');
const imageDescription = document.getElementById('description');
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');

document.addEventListener("DOMContentLoaded", main)

function main(){
    

fetch("carouselData.json")
.then((response)=>response.json())
.then((json)=>{
    console.log(json);
    images=json;
    nextButton.addEventListener('click', goToNext);
    backButton.addEventListener('click', goToBack);

    showImage(currentIndex);
    
})
}


function showImage(index) {
    carouselImage.src = images[index].src;
    imageDescription.textContent = images[index].description;
}

function goToNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function goToBack() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

