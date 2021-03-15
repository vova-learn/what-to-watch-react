import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../../movies-list/movies-list';
import {propFilm} from '../../../props-validation';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/actions';
import {FilmsGenres, Lists} from '../../../const';
import {getFimlsByGenre, getGenres} from './../../../utils';
import MoreButton from './more-button';
import GenresTabs from './genres-tabs';

const Catalog = (props) => {
  const {state, onGenreChange} = props;

  const [showFilmsCount, setShowFilmsCount] = useState(Lists.START_VIEWCARD);
  // TODO: isMoreButtonVisible ??setIsShowButtonVisible??
  const [moreButtonVisible, setShowButtonVisible] = useState(false);

  useEffect(() => {
    if (state.films.length > showFilmsCount) {
      setShowButtonVisible(true);
    } else {
      setShowButtonVisible(false);
    }
  }, [showFilmsCount, state.genre]);

  const handleGenresTabsClick = (evt, genre) => {
    evt.preventDefault();
    onGenreChange(ActionCreator.showGenre(genre));
    setShowFilmsCount(Lists.START_VIEWCARD);
  };

  const handleShowMoreButtonClick = () => {
    setShowFilmsCount((count) => count + Lists.STEP_VIEWCARD);
  };

  const genres = [FilmsGenres.DEFAULT, ...getGenres(state.films, Lists.MAX_GENER_TABS)];
  const filmsByGenre = state.films.slice(0, showFilmsCount);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresTabs genres={genres} genreInState={state.genre} onGenreTabClick={handleGenresTabsClick} />
      <MoviesList films={filmsByGenre} />
      <MoreButton isVisible={moreButtonVisible} onShowMoreButtonClick={handleShowMoreButtonClick} />
    </section>
  );
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired,
  onGenreChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(
        PropTypes.shape(propFilm).isRequired
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, props) => {
  state.films = getFimlsByGenre(props.films, state.genre, FilmsGenres.DEFAULT);
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
