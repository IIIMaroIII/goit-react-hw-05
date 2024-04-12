import { Link } from 'react-router-dom';

import css from './movieInfo.module.css';

const MovieInfo = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Additional Information</h2>
      <ul className={css.list}>
        <li>
          <Link className={css.link} to={'cast'}>
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.link} to={'reviews'}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieInfo;
