import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {propFilm} from '../../props-validation';

const MoviesList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return <MovieCard key={film.id} film={film} />;
      })}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired
};

export default MoviesList;
