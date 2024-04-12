import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './navigation.module.css';

const Navigation = () => {
  const isLinkActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <ul className={css.wrapper}>
      <li className={css.item}>
        <NavLink className={isLinkActive} to={'/'}>
          Home
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink className={isLinkActive} to={'/movies'}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
