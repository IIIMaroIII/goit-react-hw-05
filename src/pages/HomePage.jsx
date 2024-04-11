import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

import API from '../components/services/API';
import { NavLink, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await API.getTrendingMovies();
        setResults([...res.results]);
      } catch (error) {
        setError({ message: error.message });
      }
    }
    fetchData();
  }, []);

  return (
    <section>
      <h1>Trending Today</h1>
      {results.length > 0 && (
        <ul>
          {results.map(({ id, title, ...restArgs }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`}>
                <p>{title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

HomePage.propTypes = {};

export default HomePage;
