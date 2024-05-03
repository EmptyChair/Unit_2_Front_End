const BASE_URL = "https://jsonplaceholder.typicode.com";
const image = document.getElementById("image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let count = 0;

async function fetchImages() {
    try {
        const response = await fetch(`${BASE_URL}/photos`)
        const images = await response.json();
        return images;
    } catch (error) {
        console.log(error.message);
    }
}

async function getImage(x) {
    const images = await fetchImages();
    console.log("Fetched Images: ");
    console.log(images);
    //determine the image ID we need
    count +=x;
    console.log("New Count: "+count);
    if (count<1) {
        count = 4999 
    }
    if (count > 4999) {
        count = 0;
    }
    newID = count;
    console.log("Id from new count: "+newID);
    image.src = images[newID].thumbnailUrl;
}

async function getNextImage() {
    getImage(1);
}

async function getPrevImage() {
    getImage(-1);
}

next.onclick = getNextImage;
prev.onclick = getPrevImage;

/*
const BASE_URL = "https://jsonplaceholder.typicode.com";
const image = document.getElementById("image");
let count = 1;

async function fetchImages() {
    try {
        const response = await fetch(`${BASE_URL}/photos`)
        const images = await response.json();
        return images;
    } catch (error) {
        console.log(error.message);
    }
}

next.onclick = getImage(1);
prev.onclick = getImage(-1);

function getImage(x) {
    const images = fetchImages();
    console.log("Reveal fetched images:");
    console.log(images);
    //determine the image ID we need
    count = count+x;
    if (count<1) {
        count = 5000 
    }
    if (count > 5000) {
        count = 0;
    }
    newID = count-1;
    image.src = images[newID].thumbnailUrl;
}
*/
