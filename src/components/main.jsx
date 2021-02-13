import React from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';
import MovieCardPromo from './movie-card-promo';
import PageContent from './page-content';

const Main = ({promoCard, miniCardData}) => {
  return (
    <React.Fragment>
      <Logo />
      <MovieCardPromo promoCard={promoCard}/>
      <PageContent miniCardData={miniCardData}/>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoCard: PropTypes.shape({
    keyname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    premiere: PropTypes.shape({
      date: PropTypes.string,
      year: PropTypes.string.isRequired,
    }).isRequired,
  }),
  miniCardData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        keyname: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
  ).isRequired,
};

export default Main;
