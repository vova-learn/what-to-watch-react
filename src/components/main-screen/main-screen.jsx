import React from 'react';
import PropTypes from 'prop-types';

import PromoContent from './promo-content';
import PageContent from './page-content';

const MainScreen = ({films}) => {
  const [promoFilm, ...pageFilms] = films;

  return (
    <React.Fragment>
      <PromoContent film={promoFilm}/>
      <PageContent films={pageFilms}/>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        scoresCount: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        runTime: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired
      }).isRequired
  ).isRequired
};

export default MainScreen;
