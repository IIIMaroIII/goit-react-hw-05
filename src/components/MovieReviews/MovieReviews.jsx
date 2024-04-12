import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import API from '../services/API';

import css from './movieReviews.module.css';

const MovieReviews = () => {
  const [result, setResult] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    async function fetchData() {
      try {
        const { results, total_pages } = await API.getReviews(movieId);
        setResult(results);
        setTotalPages(total_pages);
        setError(null);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <ul className={css.list}>
        {result &&
          result.map(({ id, author, content, ...rest }) => (
            <li className={css.item} key={id}>
              <h2 className={css.title}>Author: {author}</h2>
              <p className={css.text}>{content}</p>
            </li>
          ))}
        {totalPages === 0 && (
          <li className={css.text} key={movieId}>
            <p>We don`t have any reviews for this movie</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
