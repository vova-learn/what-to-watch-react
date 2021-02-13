import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './main';
import SignIn from './sign-in';
import MyList from './my-list';
import MoviePage from './movie-page';
import AddReview from './add-review';
import Player from './player';
import NotFound from './not-found';

const App = ({promoCard, miniCardData}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main promoCard={promoCard} miniCardData={miniCardData}/>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <MoviePage />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
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
