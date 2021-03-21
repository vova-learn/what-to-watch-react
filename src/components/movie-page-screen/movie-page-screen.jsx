import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from "prop-types";
import MoviesList from '../movies-list/movies-list';
import {propFilm} from '../../props-validation';
import Tabs from './tabs/tabs';
import {getSimilarFilms} from '../../utils';
import {Lists} from '../../const';
import {fetchFilm} from '../../store/api-actions';
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../header/header';
import Footer from '../footer/footer';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const MoviePageScreen = ({films, film, id, isLoadFilm, onLoadFilm, isLoadFilmFailed}) => {
  const history = useHistory();

  useEffect(() => {
    if (!isLoadFilm) {
      onLoadFilm(id);
    }
  }, [isLoadFilm]);


  if (!isLoadFilm && !isLoadFilmFailed) {
    return <LoadingScreen />;
  } if (!isLoadFilm && isLoadFilmFailed) {
    return <NotFoundScreen />;
  }

  const {backgroundImage, backgroundColor, name, genre, released, posterImage} = film;
  const similarFilms = getSimilarFilms(films, film);

  return (
    <>
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width={218} height={327} />
            </div>
            <Tabs film={film}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {similarFilms && <MoviesList films={similarFilms.splice(0, Lists.MAX_SIMILAR)} />}
        </section>
        <Footer />
      </div>
    </>
  );
};

MoviePageScreen.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired,
  film: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  isLoadFilm: PropTypes.bool.isRequired,
  onLoadFilm: PropTypes.func.isRequired,
  isLoadFilmFailed: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    film: state.film,
    isLoadFilm: state.isLoadFilm,
    isLoadFilmFailed: state.isLoadFilmFailed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadFilm: (id) => dispatch(fetchFilm(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageScreen);
