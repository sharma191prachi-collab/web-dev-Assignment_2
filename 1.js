let historyList = [];

async function getWeather(){

let city = document.getElementById("city").value;

document.getElementById("consoleText").innerHTML =
"Sync Start <br> Fetching Weather...";

let apiKey = "YOUR_API_KEY";

let url =
"https://api.openweathermap.org/data/2.5/weather?q="
+ city +
"&appid="
+ apiKey +
"&units=metric";

try{

let response = await fetch(url);
let data = await response.json();

let temp = data.main.temp;
let humidity = data.main.humidity;
let wind = data.wind.speed;

document.getElementById("weather").innerHTML =
"City: " + data.name + "<br>" +
"Temp: " + data.main.temp + " °C<br>" +
"Humidity: " + data.main.humidity + "%";


historyList.push(city);
showHistory();

document.getElementById("consoleText").innerHTML +=
"<br>Data Loaded Successfully";

}

catch(error){

document.getElementById("weather").innerHTML="City not found";

}

}

function showHistory(){

let historyDiv = document.getElementById("history");

historyDiv.innerHTML="";

historyList.forEach(function(city){

historyDiv.innerHTML += "<span>"+city+"</span>";

});

}
