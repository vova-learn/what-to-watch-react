import React from 'react';
import PropTypes from 'prop-types';

import PromoContent from './promo-content/promo-content';
import PageContent from './page-content/page-content';
import {propFilm} from '../../props-validation';

const MainScreen = ({films, filmsGenres}) => {
  const [promoFilm, ...pageFilms] = films;

  return (
    <React.Fragment>
      <PromoContent film={promoFilm}/>
      <PageContent films={pageFilms} filmsGenres={filmsGenres}/>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired,
  filmsGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainScreen;
