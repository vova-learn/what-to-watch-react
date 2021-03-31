import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import {fetchFilm} from '../../store/api-actions';
import {Lists} from '../../const';
import {propFilm} from '../../props-validation';
import {getFilm, getSimilarFilms, getStatusLoadFilm, getStatusLoadFilmFailed} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

import MovieCardFull from './movie-card-full/movie-card-full';
import MoviesList from '../movies-list/movies-list';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Footer from '../footer/footer';

const MoviePageScreen = ({id, film, similarFilms, isLoadFilm, onLoadFilm, isLoadFilmFailed, authorizationStatus}) => {
  useEffect(() => {
    if (!isLoadFilm) {
      onLoadFilm(id);
    }
  }, [isLoadFilm]);

  if (!isLoadFilm && !isLoadFilmFailed) {
    return <LoadingScreen />;
  } else if (!isLoadFilm && isLoadFilmFailed) {
    return <NotFoundScreen />;
  }

  return (
    <>
      <MovieCardFull
        film={film}
        id={id}
        authorizationStatus={authorizationStatus}
      />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          {!!similarFilms.length && (
            <>
              <h2 className="catalog__title">More like this</h2>
              <MoviesList films={similarFilms.splice(0, Lists.MAX_SIMILAR)} />
            </>
          )}
        </section>

        <Footer />

      </div>
    </>
  );
};

MoviePageScreen.propTypes = {
  id: PropTypes.number.isRequired,
  film: PropTypes.object.isRequired,
  similarFilms: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired,
  isLoadFilm: PropTypes.bool.isRequired,
  onLoadFilm: PropTypes.func.isRequired,
  isLoadFilmFailed: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
  similarFilms: getSimilarFilms(state),
  isLoadFilm: getStatusLoadFilm(state),
  isLoadFilmFailed: getStatusLoadFilmFailed(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilm: (id) => dispatch(fetchFilm(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageScreen);
