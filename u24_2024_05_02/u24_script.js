// https://openweathermap.org/
// API CALL
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//my key 54998115eff0a06d035e53bfc4832d3c

const API_KEY = "54998115eff0a06d035e53bfc4832d3c";

//REQUEST EXAMPLES:

/*
Standard (default)
api.openweathermap.org/data/3.0/onecall?lat=30.489772&lon=-99.771335

Metric
api.openweathermap.org/data/3.0/onecall?lat=30.489772&lon=-99.771335&units=metric

Imperial
api.openweathermap.org/data/3.0/onecall?lat=30.489772&lon=-99.771335&units=imperial 
*/

// COUNTRY CODES
// https://www.iso.org/obp/ui/#search/code/
// use alpha-2 codes

/*

API call
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
*/


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