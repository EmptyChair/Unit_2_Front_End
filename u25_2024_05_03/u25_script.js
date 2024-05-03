const API_KEY = 'fa1e72ff893c6a4a5ed4077327e855b4';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=BeerSheva&appid=${API_KEY}`)
    .then(response => response.json())
    .then(weather => console.log(weather))

location = "Berlin";

locationInput.oninput = (e) => {
    location = e.target.value.toLowerCase();
}


console.log(location);

/*
1. Read location name from input

2. find weather for location

3. display it

*/

