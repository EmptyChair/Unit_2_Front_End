const BASE_URL = "https://jsonplaceholder.typicode.com";
const thumbnail = document.getElementById("thumbnail");
const image = document.getElementById("image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const prevImage = document.getElementById("prev img");
const nextImage = document.getElementById("next img");
let count = 0;
let countImage = 0;

/* 
// IGOR:
let urls = [];
const urlsConst = [];
// empty array for future work
*/

async function fetchImages() {
    try {
        const response = await fetch(`${BASE_URL}/photos`)
        const images = await response.json();
        return images;
    } catch (error) {
        console.log(error.message);
    }
}

/*
// IGOR - Option 1: 
fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(photos => {
        // deep copy -  a new array way contents will be stored
        urls = [...photos.map(ph => ph.thumbnailUrl)];

        // shallow copy - no new array
        // urls = photos.map(ph => ph.thumbnailUrl);


    } )
    // photos = images, an array of objects procured from the site
    // reducing information to the minimum 
*/

/*
// IGOR - Option 2: 
fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(photos => {
        // Changing of the array stored within const is possible
        // as the array keeps the reference to play inside the memory where the info is stored
        photos.forEach(ph => urlsConst.push(ph.thumbnailUrl))
    } )
    // photos = images, an array of objects procured from the site
    // reducing information to the minimum 
*/

async function getImage(x) {
    const images = await fetchImages();
    console.log("Fetched Images: ");
    console.log(images);
    //determine the image ID we need
    console.log("Old Count: "+countImage);
    countImage +=x;    
    if (countImage < 0) {
        countImage = 4999 
    }
    if (countImage > 4999) {
        countImage = 0;
    }
    console.log("New Count: "+countImage);
    image.src = images[countImage].url;
}

nextImage.onclick = () => { getImage(1) };
prevImage.onclick = () => { getImage(-1) };

async function getThumbnail(x) {
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
    thumbnail.src = images[count].thumbnailUrl;
}

next.onclick = () => { getThumbnail(1) };
prev.onclick = () => { getThumbnail(-1) };

/*
// IGOR - no dependence on particular array length
prev.onclick = () => {
    // if (i) {
    //     i--;
    // } else {
    //     i = urls.length - 1;
    // }
    i = i ? --i : urls.length - 1;
    image.src = urls[i];
}

next.onclick = () => {
    i = i === urls.length - 1 ? 0 : ++i;
    image.src = urls[i];
}



*/



/*
// MY WRONG VERSION
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
