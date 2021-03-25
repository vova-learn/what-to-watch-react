import React from 'react';
import PropTypes from 'prop-types';

import {propFilm} from '../../../props-validation';
import {AuthorizationStatus} from '../../../const';

import Header from '../../header/header';
import MovieCardButtons from '../../movie-card-buttons/movie-card-buttons';


const MovieCardFull = ({film, id, authorizationStatus, children}) => {
  const {backgroundImage, backgroundColor, name, genre, released, posterImage} = film;
  const isUser = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <MovieCardButtons
              id={id}
              isFavoriteFilm={film.isFavorite}
              isUser={isUser}
              isVisibleAddReview />

          </div>
        </div>
      </div>
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={name} width={218} height={327} />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

MovieCardFull.propTypes = {
  film: PropTypes.shape(propFilm).isRequired,
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export default MovieCardFull;
