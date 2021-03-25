import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../movies-list/movies-list';
import {propFilm} from '../../props-validation';
import {connect} from 'react-redux';
import {downloadFavoriteFilms} from '../../store/api-actions';
import Footer from './../footer/footer';
import Header from './../header/header';
import Spineer from './../spinner/spinner';

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

      <Header isUserBlock={false}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {isLoadFavoriteFilms && <MoviesList films={favoriteFilms} />}
        {!isLoadFavoriteFilms && <Spineer style={spinnerStyle} />}

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

const mapStateToProps = (state) => {
  return {
    favoriteFilms: state.favoriteFilms,
    isLoadFavoriteFilms: state.isLoadFavoriteFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadFavoriteFilms: () => {
      dispatch(downloadFavoriteFilms());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListScreen);
