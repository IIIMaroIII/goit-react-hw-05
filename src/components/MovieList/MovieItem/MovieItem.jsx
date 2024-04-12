import React from 'react';

import css from './movieItem.module.css';

const MovieItem = ({ data }) => {
  const { vote_average, backdrop_path, title, overview, genres } = data;
  const rate = (vote_average * 10).toFixed(0) + '%';
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}}`}
        alt=""
      />
      <div className={css.infoWrapper}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.text}>User Score: {rate}</p>
        <h3 className={css.subtitle}>Overview</h3>
        <p className={css.text}>{overview}</p>
        <h3 className={css.subtitle}>Genres</h3>
        <ul className={css.genresWrapper}>
          {genres.map(({ id, name }) => (
            <li className={css.genresItem} key={id}>
              <p className={css.genresText}>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MovieItem.propTypes = {};

export default MovieItem;
