import React from 'react';
import PropTypes from 'prop-types';

import PromoContent from './promo-content/promo-content';
import PageContent from './page-content/page-content';
import {propFilm} from '../../props-validation';

const MainScreen = ({films}) => {
  const [promoFilm, ...pageFilms] = films;

  return (
    <React.Fragment>
      <PromoContent film={promoFilm} />
      <PageContent films={pageFilms} />
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired,
};

export default MainScreen;
