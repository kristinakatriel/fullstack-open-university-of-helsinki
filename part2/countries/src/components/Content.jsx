const Content = ({ countriesFound }) => {
  if (countriesFound.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countriesFound.length === 1) {
    return countriesFound.map(country => (
      <div key={country.name.common}>
        <h1>{country.name.common}</h1>
        <div>Capital {country.capital}</div>
        <div>Area {country.area}</div>
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
      </div>
    ));
  }

  if (countriesFound.length > 0) {
    return (
      <div>
        {countriesFound.map(country => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
      </div>
    );
  }

  return null;
};

export default Content;
