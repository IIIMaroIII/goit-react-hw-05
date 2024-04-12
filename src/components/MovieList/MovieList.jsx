import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import css from './movieList.module.css';

const MovieList = ({ data }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && (
        <h1 className={css.title}>Trending Today</h1>
      )}
      {data.length > 0 && (
        <ul className={css.list}>
          {data.map(({ id, title, ...restArgs }) => (
            <li className={css.item} key={id}>
              <Link to={`/movies/${id}`} state={location}>
                <p className={css.text}>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
MovieList.defaultProps = { data: {} };

MovieList.propTypes = {};

export default MovieList;
