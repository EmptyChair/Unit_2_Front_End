


// https://openweathermap.org/
// API CALL
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//my key 54998115eff0a06d035e53bfc4832d3c

/*
API CALLS

Standard (default)
api.openweathermap.org/data/3.0/onecall?lat=30.489772&lon=-99.771335

Metric
api.openweathermap.org/data/3.0/onecall?lat=30.489772&lon=-99.771335&units=metric

Imperial
api.openweathermap.org/data/3.0/onecall?lat=30.489772&lon=-99.771335&units=imperial 

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
*/

// COUNTRY CODES
// https://www.iso.org/obp/ui/#search/code/
// use alpha-2 codes
/*
fetch( `https://api.openweathermap.org/data/2.5/weather?q=BeerSheba&units=metric&appid=${API_KEY}` )
    //.then(response => console.log(response))
    .then(response => response.json())
    .then(weather => console.log(weather.name+", temperature as felt "+weather.main.feels_like+" degrees C"))

fetch( `https://api.openweathermap.org/data/2.5/weather?q=Aachen,DE&units=imperial&appid=${API_KEY}` )
    //.then(response => console.log(response))
    .then(response => response.json())
    .then(weather => console.log(weather.name+", temperature as felt "+weather.main.feels_like+" degrees F"))

fetch( `https://api.openweathermap.org/data/2.5/weather?q=Rome,IT&appid=${API_KEY}` )
    //.then(response => console.log(response))
    .then(response => response.json())
    .then(weather => console.log(weather.name+", temperature as felt "+weather.main.feels_like+" degrees Kelvin"))

fetch( `https://api.openweathermap.org/data/2.5/weather?q=Minsk,BY&appid=${API_KEY}` )
    //.then(response => console.log(response))
    .then(response1 => response1.json())
    .then(weather => console.log(weather.name+", temperature as felt "+weather.main.feels_like+" degrees Kelvin"))
*/

//VARIABLES
const API_KEY = "54998115eff0a06d035e53bfc4832d3c";

// READ LOCATION FROM INPUT
// FIND WEATHER IN THAT LOCATION
// DISPLAY THE WEATHER 

getWeatherButton.onclick = findWeather;

async function findWeather() {
    let location = locationInput.value.trim();
    location = location.toLowerCase();  
    console.log("Searching for weather in "+ location)  
    const li = document.createElement("li");
    li.classList.add("list-group-item", "list-group-item-action");
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        //DESTRUCTURING
        .then(function( { 
            name, 
            weather: [ { description, icon } ], 
            main : { temp, pressure, humidity }, 
            //alias
            wind: { speed : windspeed }, 
            rain: { rainTime },  
            cod 
        }) {
            if (cod == 404) {
                li.innerHTML = 
                `
                <h5>${location}: Location not found!<h5>
                `  
            } else {
                li.innerHTML = 
                `
                <h3>Location: ${name}</h3>
                <h5>Pressure: ${pressure} Pa</h5>
                <h5>Humidity: ${humidity} %</h5>
                <h5>Temperature: ${temp} °C</h5>
                <h5>Weather: ${description}</h5>
                <h5>Wind: ${windspeed} km/h</h5>                
                `    
            }
        } )
        .then(function() {
            if (weatherContainer.childNodes.length == 0) {
                weatherContainer.appendChild(li);                
            } else {
                weatherContainer.removeChild(weatherContainer.firstChild);
                weatherContainer.appendChild(li);    
            }
        })    
}

/* 
{
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}
*/










