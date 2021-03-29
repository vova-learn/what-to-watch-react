import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {propFilm} from '../../../props-validation';
import {AuthorizationStatus} from '../../../const';

import MovieCardButtons from '../../movie-card-buttons/movie-card-buttons';
import Header from '../../header/header';

const PromoContent = ({promoFilm, authorizationStatus}) => {
  const {name, posterImage, backgroundImage, backgroundColor, genre, released, id, isFavorite} = promoFilm;
  const isUser = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <section className="movie-card">
      <div className="movie-card__bg" style={{backgroundColor}}>
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <Header isMainScreen />

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

            <MovieCardButtons
              id={id}
              isFavoriteFilm={isFavorite}
              isUser={isUser}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

PromoContent.propTypes = {
  promoFilm: PropTypes.shape(propFilm).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  promoFilm: DATA.promo,
  authorizationStatus: USER.authorizationStatus,
});

export default connect(mapStateToProps, null)(PromoContent);
