import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import API from '../components/services/API';

const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  const handleSearchSubmit = e => {
    e.preventDefault();
    const v = e.target.elements.query.value;
    setSearchParams({ query: v.toLowerCase().trim() });
    e.target.reset();
  };

  useEffect(() => {
    if (!query) return;
    async function fetchData() {
      try {
        const res = await API.getSearchMovie(query);

        setMoviesList({ ...res });
        setError(null);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [query]);

  return (
    <section>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {moviesList && (
        <ul>
          {moviesList.results.map(({ id, title, ...restArgs }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={location}>
                <p>{title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

MoviesPage.propTypes = {};

export default MoviesPage;
