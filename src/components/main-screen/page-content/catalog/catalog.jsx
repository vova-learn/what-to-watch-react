import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {propFilm} from '../../../../props-validation';
import {showGenre} from '../../../../store/actions';
import {FilmsGenres, Lists} from '../../../../const';
import {getFimlsByGenre, getGenres} from '../../../../utils';
import {getGenre} from '../../../../store/data/selectors';

import GenresTabs from './genres-tabs';
import MoviesList from '../../../movies-list/movies-list';
import MoreButton from './more-button';

const Catalog = ({films, genre, onGenreChange}) => {
  const [showFilmsCount, setShowFilmsCount] = useState(Lists.START_VIEWCARD);
  const [moreButtonVisible, setShowButtonVisible] = useState(false);

  const filmsByGenres = getFimlsByGenre(films, genre, FilmsGenres.DEFAULT);

  useEffect(() => {
    if (filmsByGenres.length > showFilmsCount) {
      setShowButtonVisible(true);
    } else {
      setShowButtonVisible(false);
    }
  }, [showFilmsCount, genre]);


  const genres = [FilmsGenres.DEFAULT, ...getGenres(films, Lists.MAX_GENER_TABS)];
  const filmsToDisplay = filmsByGenres.slice(0, showFilmsCount);

  const handleGenresTabsClick = (evt, genreInState) => {
    evt.preventDefault();
    onGenreChange(genreInState);
    setShowFilmsCount(Lists.START_VIEWCARD);
  };

  const handleShowMoreButtonClick = () => {
    setShowFilmsCount((count) => count + Lists.STEP_VIEWCARD);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresTabs genres={genres} genreInState={genre} onGenreTabClick={handleGenresTabsClick} />

      <MoviesList films={filmsToDisplay} />

      <MoreButton isVisible={moreButtonVisible} onShowMoreButtonClick={handleShowMoreButtonClick} />

    </section>
  );
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired,
  genre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (genreInState) => {
    dispatch(showGenre(genreInState));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
