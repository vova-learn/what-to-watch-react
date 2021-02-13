import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './main';

const App = ({promoCard, miniCardData}) => {
  return (
    <Main promoCard={promoCard} miniCardData={miniCardData}/>
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
