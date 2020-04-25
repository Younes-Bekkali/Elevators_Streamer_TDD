const axios = require("axios");

async function getContent(type) {
  if (type == "weather") {
    const weather = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather?APPID=34282b0d42ef00a0529b546b07c1983b&id=6077243&units=metric"
    );
    console.log("The weather situation in "+  weather.data["name"]+ "," + weather.data["sys"]["country"]+":" +"is "+  weather.data["weather"][0]["description"]  + ", the Temperature is: " + weather.data["main"]["temp"] + "C");
    return weather.data["main"]["temp"];
  } else if (type == "chuck_norris") {
    const joke = await axios.get(
      "http://api.icndb.com/jokes/random"
    );
    console.log("Joke :"+ joke.data['value']['joke']);
    return joke.data['value']['joke'];
  }
}

module.exports = getContent;
