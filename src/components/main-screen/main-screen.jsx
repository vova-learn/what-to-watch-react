import React from 'react';
import PropTypes from 'prop-types';

import PromoContent from './promo-content';
import PageContent from './page-content';

const MainScreen = ({promoCard, miniCardData}) => {
  return (
    <React.Fragment>
      <PromoContent promoCard={promoCard}/>
      <PageContent miniCardData={miniCardData}/>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
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

export default MainScreen;
