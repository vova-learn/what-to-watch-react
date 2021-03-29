import React from 'react';
import PropTypes from 'prop-types';

import GenreTab from './genre-tab';

const GenresTabs = ({genres, genreInState, onGenreTabClick}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (

        <GenreTab
          key={genre}
          genre={genre}
          genreInState={genreInState}
          onGenreTabClick={onGenreTabClick}
        />

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

export default React.memo(GenresTabs, (prevProps, nextProps) => {
  if (prevProps.genreInState === nextProps.genreInState) {
    return true;
  } else {
    return false;
  }
});
