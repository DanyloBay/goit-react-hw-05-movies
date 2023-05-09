import { useState } from 'react';
import css from './MovieForm.module.css';

const MovieForm = ({ onSubmit }) => {
  const [query, setQuery] = useState();

  const handleInputChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form className={css.movieSearchForm} onSubmit={handleSubmit}>
      <input
        className={css.movieSearchInput}
        type="text"
        onChange={handleInputChange}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default MovieForm;
