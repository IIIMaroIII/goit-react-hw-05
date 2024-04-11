import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import API from '../services/API';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    async function fetchData() {
      try {
        const res = await API.getCredits(movieId);
        setCast([...res.cast]);
        console.log(cast);
        setError(null);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ id, name, profile_path, original_name, ...rest }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={`${original_name}`}
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieCast.propTypes = {};

export default MovieCast;
