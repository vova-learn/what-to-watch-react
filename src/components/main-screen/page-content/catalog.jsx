import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {propFilm} from '../../../props-validation';
import {ActionCreator} from '../../../store/actions';
import {FilmsGenres, Lists} from '../../../const';
import {getFimlsByGenre, getGenres} from './../../../utils';

import GenresTabs from './genres-tabs';
import MoviesList from '../../movies-list/movies-list';
import MoreButton from './more-button';

const Catalog = ({state, onGenreChange}) => {
  // TODO: из пропсов приходят фильмы.
  // TODO: пока оставить. буду работать из состояния.
  const {films, genre} = state;

  const [showFilmsCount, setShowFilmsCount] = useState(Lists.START_VIEWCARD);
  const [moreButtonVisible, setShowButtonVisible] = useState(false);

  useEffect(() => {
    if (films.length > showFilmsCount) {
      setShowButtonVisible(true);
    } else {
      setShowButtonVisible(false);
    }
  }, [showFilmsCount, genre]);


  const genres = [FilmsGenres.DEFAULT, ...getGenres(films, Lists.MAX_GENER_TABS)];
  const filmsByGenre = getFimlsByGenre(films, genre, FilmsGenres.DEFAULT).slice(0, showFilmsCount);

  const handleGenresTabsClick = (evt, genreInState) => {
    evt.preventDefault();
    onGenreChange(ActionCreator.showGenre(genreInState));
    setShowFilmsCount(Lists.START_VIEWCARD);
  };

  const handleShowMoreButtonClick = () => {
    setShowFilmsCount((count) => count + Lists.STEP_VIEWCARD);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresTabs genres={genres} genreInState={genre} onGenreTabClick={handleGenresTabsClick} />
      <MoviesList films={filmsByGenre} />
      <MoreButton isVisible={moreButtonVisible} onShowMoreButtonClick={handleShowMoreButtonClick} />
    </section>
  );
};

Catalog.propTypes = {
  // TODO: передаём фильмы в пропсах
  // films: PropTypes.arrayOf(
  //     PropTypes.shape(propFilm).isRequired
  // ).isRequired,
  state: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(
        PropTypes.shape(propFilm).isRequired
    ).isRequired,
  }).isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreChange: (action) => {
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
