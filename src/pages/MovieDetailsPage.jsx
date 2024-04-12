import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { useParams, useLocation, Link, Routes, Route } from 'react-router-dom';

import API from '../components/services/API';
// import MovieCast from '../components/MovieCast/MovieCast';
// import MovieReviews from '../components/MovieReviews/MovieReviews';
import MovieItem from '../components/MovieList/MovieItem/MovieItem';
import MovieInfo from '../components/MovieList/MovieItem/MovieInfo/MovieInfo';
import NotFoundPage from '../pages/NotFoundPage';
import Loader from '../components/Loader/Loader';

const MovieCast = lazy(() => import('../components/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('../components/MovieReviews/MovieReviews'),
);

const MovieDetailsPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location?.state ?? '/movies');

  useEffect(() => {
    if (!movieId) return;
    async function fetchData() {
      try {
        const res = await API.getMovieById(movieId);
        setSelectedMovie(res);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {selectedMovie ? (
        <>
          <Link className="btn" to={backLinkRef.current}>
            Go back
          </Link>
          <MovieItem data={selectedMovie} />
          <MovieInfo />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Routes>
          </Suspense>
        </>
      ) : (
        <NotFoundPage errMessage={error} />
      )}
    </div>
  );
};

export default MovieDetailsPage;
