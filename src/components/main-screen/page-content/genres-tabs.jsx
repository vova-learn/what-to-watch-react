import React from 'react';
import PropTypes from 'prop-types';

const GenresTabs = ({genres, genreInState, onGenreTabClick}) => {
  const activeGenreClass = `catalog__genres-item--active`;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${genre === genreInState && activeGenreClass}`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => onGenreTabClick(evt, genre)}
          >
            {genre}
          </a>
        </li>
      )
      )}
    </ul>
  );
};

GenresTabs.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  genreInState: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};

export default GenresTabs;
