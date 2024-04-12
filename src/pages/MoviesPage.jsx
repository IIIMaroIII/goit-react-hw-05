import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import API from '../components/services/API';
import MovieList from '../components/MovieList/MovieList';
import SearchBar from '../components/SearchBar/SearchBar';

const MoviesPage = () => {
  const [queryList, setQueryList] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
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
        const { results } = await API.getSearchMovie(query);

        setQueryList(results);
        setError(null);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [query]);

  return (
    <section>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      {queryList && <MovieList data={queryList} />}
    </section>
  );
};

export default MoviesPage;
