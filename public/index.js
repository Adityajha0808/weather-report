// Getting date and time

let year = new Date().getFullYear();
for(var i=0; i<2; i++) {
    document.getElementsByClassName("year")[i].innerHTML = year;
}

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let weekday = week[new Date().getDay()];
document.getElementById("week").innerHTML= weekday;

let date = new Date().getDate();
if(date < 10) {
  document.getElementById("date").innerHTML = "0" + date;
} else
document.getElementById("date").innerHTML = date;

let month = new Date().getMonth() + 1;
if(month < 10) {
  document.getElementById("months").innerHTML = "0" + month;
} else
document.getElementById("months").innerHTML = month;

let hours = new Date().getHours();
if(hours < 10) {
  document.getElementById("hours").innerHTML = "0" + hours;
} else
document.getElementById("hours").innerHTML = hours;

let minutes = new Date().getMinutes();
if(minutes < 10) {
  document.getElementById("minutes").innerHTML = "0" + minutes;
} else
document.getElementById("minutes").innerHTML = minutes;

//API Calling

let weather = {
    apiKey: "8590f82ed877dea1e1222f9989521a9a",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("London");