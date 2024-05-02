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