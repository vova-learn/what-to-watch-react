import React from 'react';
import PropTypes from 'prop-types';

const GenreTab = ({genre, genreInState, onGenreTabClick}) => {
  const handleGenreLinkClick = (evt) => {
    onGenreTabClick(evt, genre);
  };

  const genreLinkJsx = (
    <a
      href="#"
      className="catalog__genres-link"
      onClick={handleGenreLinkClick}
    >
      {genre}
    </a>
  );

  const activeGenreClass = genre === genreInState && `catalog__genres-item--active`;

  return (
    <li className={`catalog__genres-item ${activeGenreClass}`}>
      {genreLinkJsx}
    </li>
  );
};

GenreTab.propTypes = {
  genre: PropTypes.string.isRequired,
  genreInState: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};

export default React.memo(GenreTab, (prevProps, nextProps) => {
  if (prevProps.genre === prevProps.genreInState || nextProps.genre === nextProps.genreInState) {
    return false;
  } else {
    return true;
  }
});
