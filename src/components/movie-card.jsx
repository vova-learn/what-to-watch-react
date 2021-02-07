import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => (
  <section className="movie-card">
    <div className="movie-card__bg">
      <img src={`img/bg-${props.promoCard.keyname}.jpg`} alt={props.promoCard.title} />
    </div>
    <h1 className="visually-hidden">WTW</h1>
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
        </div>
      </div>
    </header>
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={`img/${props.promoCard.keyname}-poster.jpg`} alt={props.promoCard.title} width={218} height={327} />
        </div>
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{props.promoCard.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{props.promoCard.genre}</span>
            <span className="movie-card__year">{props.promoCard.premiere.year}</span>
          </p>
          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width={19} height={20}>
                <use xlinkHref="#add" />
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

MovieCard.propTypes = {
  promoCard: PropTypes.shape({
    keyname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    premiere: PropTypes.shape({
      date: PropTypes.string,
      year: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default MovieCard;
