const apiKey = "6f239b9e3e57501fa1aa7941b71afda3";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
  const response=await fetch(apiUrl + city + `&appid=${apiKey}`)
  var data=await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML=data.name
  document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed+"Km/h";
  //text updated
  //now lets update the image
  const weatherIcons = {
    Clouds: "./images/clouds.png",
    Clear: "./images/clear.png",
    Rain: "./images/rain.png",
    Drizzle: "./images/drizzle.png",
    Mist: "./images/mist.png",
  };

  weatherIcon.src = weatherIcons[data.weather[0].main];
}
searchButton.addEventListener("click",()=>{
  checkWeather(searchBox.value)
})
