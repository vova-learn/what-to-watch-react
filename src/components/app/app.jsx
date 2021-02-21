import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MoviePageScreen from '../movie-page-screen/movie-page-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {propFilm} from '../../props-validation';

const App = ({films}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen films={films}/>
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen films={films}/>
        </Route>
        <Route exact path="/films/:id" render={({match}) => {
          return (
            <MoviePageScreen films={films} id={Number(match.params.id)} />
          );
        }}>
        </Route>
        <Route exact path="/films/:id/review" render={({match}) => {
          return (
            <AddReviewScreen films={films} id={Number(match.params.id)} />
          );
        }}>
        </Route>
        <Route exact path="/player/:id" render={({match}) => {
          return (
            <PlayerScreen films={films} id={Number(match.params.id)} />
          );
        }}>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired
};

export default App;
