import React from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';
import MovieCard from './movie-card';
import PageContent from './page-content';


const App = (props) => {
  return (
    <React.Fragment>
      <Logo />
      <MovieCard promoCard={props.promoCard}/>
      <PageContent />
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
};

export default App;
