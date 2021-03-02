import React from 'react';
import PropTypes from 'prop-types';

import {propFilm} from '../../../props-validation';
import {getRatingName} from '../../../utils';

const Overview = ({film}) => {
  const {rating, description, director, starring} = film;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingName(rating)}</span>
          {/* 240 ratings - нужно больше данных */}
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
      </div>
    </>
  );
};

Overview.propTypes = {
  film: PropTypes.shape(propFilm).isRequired,
};


export default Overview;
