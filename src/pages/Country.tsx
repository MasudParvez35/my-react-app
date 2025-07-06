import { useEffect, useState } from 'react';
import axios from 'axios';

type Country = {
  id: number;
  name: string;
  capital: string;
  population: string;
  interestingFact: string;
};

export const Country = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://localhost:7155/api/Country')
      .then(response => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch countries:', err);
        setError('Failed to load countries');
        setLoading(false);
      });
  }, []);

  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="gradient-cards">
        {!loading && !error && countries.map((country) => {
          const { id, name, capital, population, interestingFact } = country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{name}</p>
                <p>
                  <span className="card-description">Capital:</span> {capital}
                </p>
                <p>
                  <span className="card-description">Population:</span> {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span> {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
