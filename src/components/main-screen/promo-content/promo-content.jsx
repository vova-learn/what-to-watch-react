import React from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import {propFilm} from '../../../props-validation';

const PromoContent = ({promoFilm}) => {
  // TODO: из пропсов приходит промо фильм.
  // TODO: пока оставить. буду работать из состояния.
  const {name, posterImage, backgroundImage, backgroundColor, genre, released, id} = promoFilm;

  const history = useHistory();

  return (
    <section className="movie-card">
      <div className="movie-card__bg" style={{backgroundColor}}>
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <div className="logo">
          <Link className="logo__link" to="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
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
            <img src={posterImage} alt={name} width={218} height={327} />
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>
            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/${id}`)}>
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
};

PromoContent.propTypes = {
  promoFilm: PropTypes.shape(propFilm).isRequired,
};

const mapStateToProps = (state) => {
  return {promoFilm: state.promo};
};

export default connect(mapStateToProps, null)(PromoContent);
