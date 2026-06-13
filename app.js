const apiKey = "79c2d5da8a9936419adcdfcb8bb38374";
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector (".weather-icon");

async function checkWeather (city){
    let response = await fetch(api+city+`&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
         let data = await response.json();

    console.log (data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML= data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/Rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "mist"){
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    }


   
}    


searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})