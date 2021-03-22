import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';

import {propFilm} from '../../../props-validation';
import {AuthorizationStatus} from '../../../const';

import Header from '../../header/header';


const MovieCardFull = ({film, id, authorizationStatus, children}) => {
  const history = useHistory();

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
            <div className="movie-card__buttons">

              <button
                className="btn btn--play movie-card__button"
                type="button"
                onClick={() => history.push(`/player/${id}`)}
              >
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>

              <button
                className="btn btn--list movie-card__button"
                type="button"
                onClick={() => history.push(`/mylist`)}
              >
                <svg viewBox="0 0 19 20" width={19} height={20}>
                  <use xlinkHref="#add" />
                </svg>
                <span>My list</span>
              </button>

              {isUser && <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>}

            </div>
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
