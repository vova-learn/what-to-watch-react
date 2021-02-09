import React from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';
import MovieCard from './movie-card';
import PageContent from './page-content';

const App = ({promoCard, miniCardData}) => {
  return (
    <React.Fragment>
      <Logo />
      <MovieCard promoCard={promoCard}/>
      <PageContent miniCardData={miniCardData}/>
    </React.Fragment>
  );
};

App.propTypes = {
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

export default App;
