const apiKey = "833c5e9239701aae816b5105abaee61c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbttn = document.querySelector(".search button");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        document.querySelector(".error").style.display ="none";
    }
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidty").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    const weatherIcon = document.querySelector(".weather-icon");
if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
}
else if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png"
}
else if(data.weather[0].main == "Humidity"){
    weatherIcon.src = "images/humidity.png"
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"
}
document.querySelector(".weather").style.display ="block"; 
}

searchbttn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
checkWeather(city);
