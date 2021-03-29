import React from 'react';
import PropTypes from 'prop-types';

import {propFilm} from '../../props-validation';

import PromoContent from './promo-content/promo-content';
import PageContent from './page-content/page-content';

const MainScreen = ({films, promoFilm}) => {
  return (
    <>
      <PromoContent film={promoFilm} />
      <PageContent films={films} />
    </>
  );
};

MainScreen.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired,
  promoFilm: PropTypes.shape(propFilm).isRequired,
};

export default MainScreen;
