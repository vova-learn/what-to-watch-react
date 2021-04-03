import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchFilmsList, fetchPromoFilm} from '../../store/api-actions';
import {RouteApp} from '../../const';
import PrivateRoute from '../private-route/private-route';

import {getStatusLoadFilms, getStatusLoadPromoFilm} from '../../store/data/selectors';

import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MoviePageScreen from '../movie-page-screen/movie-page-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';

const App = ({isLoadFilms, isLoadPromo, onLoadFilms, onLoadPromo}) => {
  useEffect(() => {
    if (!isLoadPromo) {
      onLoadPromo();
    }

    if (!isLoadFilms) {
      onLoadFilms();
    }
  }, [isLoadFilms, isLoadPromo]);

  const isNotLoadData = !isLoadFilms && !isLoadPromo || isLoadFilms && !isLoadPromo || !isLoadFilms && isLoadPromo;

  if (isNotLoadData) {
    return <LoadingScreen />;
  }

  return (
    <Switch>
      <PrivateRoute
        exact
        path={RouteApp.MY_LIST}
        render={() => (
          <MyListScreen />
        )}
      />

      <PrivateRoute
        exact
        path={RouteApp.MOVIE_REVIEW}
        render={({match}) => (
          <AddReviewScreen id={Number(match.params.id)} />
        )}
      />

      <Route exact path={RouteApp.MAIN}>
        <MainScreen />
      </Route>

      <Route
        exact
        path={RouteApp.MOVIE_PAGE}
        render={({match}) => (
          <MoviePageScreen id={Number(match.params.id)} />
        )}
      />

      <Route
        exact
        path={RouteApp.PLAYER}
        render={({match}) => (
          <PlayerScreen id={Number(match.params.id)} />
        )}
      />

      <Route exact path={RouteApp.SIGN_IN}>
        <SignInScreen />
      </Route>

      <Route>
        <NotFoundScreen />
      </Route>

    </Switch>
  );
};

App.propTypes = {
  onLoadFilms: PropTypes.func.isRequired,
  onLoadPromo: PropTypes.func.isRequired,
  isLoadFilms: PropTypes.bool.isRequired,
  isLoadPromo: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => ({
  isLoadFilms: getStatusLoadFilms(state),
  isLoadPromo: getStatusLoadPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms() {
    dispatch(fetchFilmsList());
  },
  onLoadPromo() {
    dispatch(fetchPromoFilm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
