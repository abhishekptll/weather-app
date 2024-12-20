const apikey = "28ddd0f4b764e23a49163ab3d7b9c95a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkweather(city) {
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    let data = await response.json(); 

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
    document.querySelector(".wind").innerHTML=data.wind.speed+" kmph";
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})



