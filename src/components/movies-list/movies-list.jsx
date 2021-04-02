import React from 'react';
import PropTypes from 'prop-types';

import {propFilm} from '../../props-validation';

import MovieCard from '../movie-card/movie-card';

const MoviesList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) => (

        <MovieCard key={film.id} film={film} />

      ))}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired
};

export default React.memo(MoviesList);
