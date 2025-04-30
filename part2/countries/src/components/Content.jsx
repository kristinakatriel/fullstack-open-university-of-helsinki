import { useEffect } from "react";

const Content = ({ countriesFound, handleCountryChange }) => {
  useEffect(() => {
    if (countriesFound.length === 1) {
      handleCountryChange(countriesFound[0]);
    }
  }, [countriesFound, handleCountryChange]);

  if (countriesFound.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countriesFound.length > 0 && countriesFound.length <=10 && countriesFound.length != 1) {
    return (
      <div>
        {countriesFound.map(country => (
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleCountryChange(country)}>Show</button>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default Content;
