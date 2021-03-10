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
import {RouteApp} from '../../const';

const App = ({films, filmsGenres}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RouteApp.MAIN}>
          <MainScreen films={films} filmsGenres={filmsGenres}/>
        </Route>
        <Route exact path={RouteApp.SIGN_IN}>
          <SignInScreen />
        </Route>
        <Route exact path={RouteApp.MY_LIST}>
          <MyListScreen films={films}/>
        </Route>
        <Route exact path={RouteApp.MOVIE_PAGE} render={({match}) => (
          <MoviePageScreen films={films} id={Number(match.params.id)} />
        )}>
        </Route>
        <Route exact path={RouteApp.MOVIE_REVIEW} render={({match}) => (
          <AddReviewScreen films={films} id={Number(match.params.id)} />
        )}>
        </Route>
        <Route exact path={RouteApp.PLAYER} render={({match}) => (
          <PlayerScreen films={films} id={Number(match.params.id)} />
        )}>
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
  ).isRequired,
  filmsGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
