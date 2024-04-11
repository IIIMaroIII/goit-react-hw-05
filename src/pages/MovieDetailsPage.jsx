import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link, Routes, Route } from 'react-router-dom';

import API from '../components/services/API';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';
import NotFoundPage from '../pages/NotFoundPage';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();

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
          <Link>Go back</Link>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}}`}
            alt=""
          />
          <p>Title: {movie.title}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>Release Date: {movie.release_date}</p>
          <Link to={'cast'}>Cast</Link>
          <Link to={'reviews'}>Reviews</Link>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </>
      ) : (
        <NotFoundPage errMessage={error.message} />
      )}
    </div>
  );
};

MovieDetailsPage.propTypes = {};

export default MovieDetailsPage;
