import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {propFilm} from '../../props-validation';
import {downloadFavoriteFilms} from '../../store/api-actions';
import {getFavoriteFilms, getStatusLoadFavoriteFilms} from '../../store/data/selectors';

import Header from './../header/header';
import Footer from './../footer/footer';
import MoviesList from '../movies-list/movies-list';
import Spinner from './../spinner/spinner';

const MyListScreen = ({favoriteFilms, isLoadFavoriteFilms, onLoadFavoriteFilms}) => {
  useEffect(() => {
    if (!isLoadFavoriteFilms) {
      onLoadFavoriteFilms();
    }

  }, [isLoadFavoriteFilms]);

  const spinnerStyle = {
    display: `block`,
    margin: `10rem auto`,
  };

  return (
    <div className="user-page">

      <Header isVisibleTitle>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {isLoadFavoriteFilms && <MoviesList films={favoriteFilms} />}
        {!isLoadFavoriteFilms && <Spinner style={spinnerStyle} />}

      </section>

      <Footer />

    </div>

  );
};

MyListScreen.propTypes = {
  favoriteFilms: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired,
  isLoadFavoriteFilms: PropTypes.bool.isRequired,
  onLoadFavoriteFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
  isLoadFavoriteFilms: getStatusLoadFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteFilms: () => {
    dispatch(downloadFavoriteFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListScreen);
