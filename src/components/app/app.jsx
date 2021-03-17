import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
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
import {checkAuth, fetchFilmsList, fetchPromoFilm} from '../../store/api-actions';
import {RouteApp} from '../../const';

const App = ({films, promoFilm, isLoadFilms, isLoadPromo, onLoadFilms, onLoadPromo, checkUserAuth}) => {
  useEffect(() => {
    if (!isLoadFilms && !isLoadPromo) {
      /*

    fixed by comment:
    https://github.com/htmlacademy-react/1176969-what-to-watch-6/pull/10#discussion_r595421312
    запросы имеют право запускаться параллельно (если загрузка задваивается, то фиксируй не её начало, а не окончание)

    */
      checkUserAuth();
      onLoadPromo();
      onLoadFilms();
    }
  }, [isLoadFilms, isLoadPromo]);

  const isNotLoadData = !isLoadFilms && !isLoadPromo || isLoadFilms && !isLoadPromo || !isLoadFilms && isLoadPromo;

  if (isNotLoadData) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RouteApp.MAIN}>
          <MainScreen films={films} promoFilm={promoFilm} />
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
  onLoadFilms: PropTypes.func.isRequired,
  onLoadPromo: PropTypes.func.isRequired,
  checkUserAuth: PropTypes.func.isRequired,
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
    checkUserAuth() {
      dispatch(checkAuth());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
