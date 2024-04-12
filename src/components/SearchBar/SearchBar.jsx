import css from './searchBar.module.css';

const SearchBar = ({ onSearchSubmit }) => {
  return (
    <>
      <form className={css.form} onSubmit={onSearchSubmit}>
        <input className={css.input} type="text" name="query" />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
