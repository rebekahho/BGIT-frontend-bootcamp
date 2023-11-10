const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "", //enter your rapid api key here
    //this is my key ac5fc94d00mshf00dde64a8b87e8p1f62e0jsn562eef7f3f85
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = ""; // enter your key from openweather API
//this is my key f40fd8feffda72b9a5d052c27ca9fb99
