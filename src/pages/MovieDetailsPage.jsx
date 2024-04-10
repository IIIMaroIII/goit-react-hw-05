import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

import API from '../components/services/API';
import NotFoundPage from '../pages/NotFoundPage';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!movieId) return;
    async function fetchData() {
      try {
        const res = await API.getMovieById(movieId);

        setMovie({ ...res });
        setError(null);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {!error ? (
        <>
          <Link to={location.state}>Go back</Link>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}}`}
            alt=""
          />
          <p>Title: {movie.title}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>Release Date: {movie.release_date}</p>
        </>
      ) : (
        <NotFoundPage errMessage={error.message} />
      )}
    </div>
  );
};

MovieDetailsPage.propTypes = {};

export default MovieDetailsPage;
