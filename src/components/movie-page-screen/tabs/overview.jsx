import React from 'react';
import PropTypes from 'prop-types';

import {propFilm} from '../../../props-validation';
import {getRatingName} from '../../../utils';

const Overview = ({film}) => {
  const getOverviewRatingJsx = ({rating, scoresCount}) => (
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingName(rating)}</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>
  );

  const getOverviewTextJsx = ({description, director, starring}) => (
    <div className="movie-card__text">
      <p>{description}</p>
      <p className="movie-card__director"><strong>Director: {director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
    </div>
  );

  return (
    <>
      {getOverviewRatingJsx(film)}
      {getOverviewTextJsx(film)}
    </>
  );
};

Overview.propTypes = {
  film: PropTypes.shape(propFilm).isRequired,
};

export default Overview;
