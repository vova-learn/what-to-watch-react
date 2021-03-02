import React from 'react';
import PropTypes from 'prop-types';
import {propFilm} from '../../../props-validation';
import {getRuntime} from '../../../utils';

const Details = ({film}) => {
  const {director, starring, runTime, genre, released} = film;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((actor, index, arr) => (
              index < arr.length - 1 ? (
                <React.Fragment key={`${actor}${index}`}>{`${actor},`}<br /></React.Fragment>
              ) : actor
            ))}
          </span>
        </p>
      </div>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getRuntime(runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  film: PropTypes.shape(propFilm).isRequired,
};


export default Details;
