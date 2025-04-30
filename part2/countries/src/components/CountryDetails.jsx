import { useState, useEffect } from "react";

const CountryDetails = ({ country }) => {
  console.log(country)
  const [weather, setWeather] = useState(null);
  const api_key = import.meta.env.VITE_API_KEY;
  const [lat, lon] = country.capitalInfo.latlng || [];
  console.log(lat)
  console.log(lon)

  const weatherUrl = lat && lon 
    ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    : null;

  useEffect(() => {
    if (weatherUrl) {
      fetch(weatherUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch weather data');
          }
          return response.json();
        })
        .then(data => {
          setWeather(data);
        })
        .catch(() => {
          setWeather(null);
        });
    }
  }, [weatherUrl]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital: {country.capital}</div>
      <div>Area: {country.area}</div>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
      <img
        src={country.flags.svg || country.flags.png}
        alt={country.flags.alt}
        width="150"
      />
      <h2>Weather in {country.capital}</h2>
      
      {weather ? (
        <div>
          <p>Temperature: {weather.main.temp} Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>Wind {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default CountryDetails;
