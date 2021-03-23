import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MoviePageScreen from '../movie-page-screen/movie-page-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';

import {propFilm} from '../../props-validation';
import {fetchFilmsList, fetchPromoFilm} from '../../store/api-actions';
import {RouteApp} from '../../const';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const App = ({films, promoFilm, isLoadFilms, isLoadPromo, onLoadFilms, onLoadPromo}) => {
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
    <BrowserRouter history={browserHistory}>
      <Switch>
        <PrivateRoute exact path={RouteApp.MY_LIST} render={() => <MyListScreen films={films}/>} />
        <PrivateRoute exact path={RouteApp.MOVIE_REVIEW} render={({match}) => (
          <AddReviewScreen id={Number(match.params.id)} />
        )} />

        <Route exact path={RouteApp.MAIN}>
          <MainScreen films={films} promoFilm={promoFilm} />
        </Route>
        <Route exact path={RouteApp.MOVIE_PAGE} render={({match}) => (
          <MoviePageScreen films={films} id={Number(match.params.id)} />
        )}>
        </Route>
        <Route exact path={RouteApp.PLAYER} render={({match}) => (
          <PlayerScreen id={Number(match.params.id)} />
        )}>
        </Route>
        <Route exact path={RouteApp.SIGN_IN}>
          <SignInScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  onLoadFilms: PropTypes.func.isRequired,
  onLoadPromo: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired,
  ).isRequired,
  promoFilm: PropTypes.object.isRequired, // TODO: с подробным описанием ошибка, данные async
  isLoadFilms: PropTypes.bool.isRequired,
  isLoadPromo: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => {
  return {
    films: state.films,
    promoFilm: state.promo,
    isLoadFilms: state.isLoadFilms,
    isLoadPromo: state.isLoadPromo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadFilms() {
      dispatch(fetchFilmsList());
    },
    onLoadPromo() {
      dispatch(fetchPromoFilm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
