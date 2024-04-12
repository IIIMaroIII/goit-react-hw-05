import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import API from '../services/API';

import css from './movieCast.module.css';

const MovieCast = () => {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    async function fetchData() {
      try {
        const { cast } = await API.getCredits(movieId);
        setActors(cast);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {actors && (
        <ul className={css.list}>
          {actors.map(({ id, name, profile_path, character, ...rest }) => (
            <li className={css.item} key={id}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={`${name}`}
              />
              <p className={css.text}>{name}</p>
              <p className={css.text}>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
