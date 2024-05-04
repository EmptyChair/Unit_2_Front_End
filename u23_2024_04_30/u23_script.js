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
    console.log("Old Count: "+count);
    count +=x;    
    if (count < 0) {
        count = 4999 
    }
    if (count > 4999) {
        count = 0;
    }
    console.log("New Count: "+count);
    image.src = images[count].thumbnailUrl;
}

next.onclick = () => { getImage(1) };
prev.onclick = () => { getImage(-1) };

/*
// WRONG VERSION
const BASE_URL = "https://jsonplaceholder.typicode.com";
const image = document.getElementById("image");
let count = 1;

// works 
async function fetchImages() {
    try {
        const response = await fetch(`${BASE_URL}/photos`)
        const images = await response.json();
        return images;
    } catch (error) {
        console.log(error.message);
    }
}

//launches function immediately instead of waiting for click
next.onclick = getImage(1);
prev.onclick = getImage(-1);

// lacks asynchonicity (doesn't wait for fetch)
function getImage(x) {
    const images = fetchImages();
    console.log("Reveal fetched images:");
    console.log(images);
    count = count+x;
    //change count from 1 ot 0, remove newID as superfluous
    if (count<1) {
        //max value 4999, not 5000
        count = 5000 
    }
    //ditto
    if (count > 5000) {
        count = 0;
    }
    newID = count-1;
    image.src = images[newID].thumbnailUrl;
}
*/
