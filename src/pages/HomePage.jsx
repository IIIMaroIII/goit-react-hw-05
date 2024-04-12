import { useState, useEffect } from 'react';

import API from '../components/services/API';
import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const [trendingList, setTrendingList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await API.getTrendingMovies();
        setTrendingList(results);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  return <section>{trendingList && <MovieList data={trendingList} />}</section>;
};

export default HomePage;
