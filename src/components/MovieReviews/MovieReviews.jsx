import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import API from '../services/API';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    async function fetchData() {
      try {
        const res = await API.getReviews(movieId);
        setReviews([...res.results]);
        setError(null);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0
        ? 'We dont have any reviews for this movie'
        : 'we do'}
    </div>
  );
};

MovieReviews.propTypes = {};

export default MovieReviews;
