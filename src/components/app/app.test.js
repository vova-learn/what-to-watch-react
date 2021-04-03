import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createApi} from '../../api/api';
import thunk from 'redux-thunk';
import {RouteApp, AuthorizationStatus, FilmsGenres} from '../../const';
import App from './app';

const api = createApi(() => {});
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middlewares);
const store = {
  DATA: {
    genre: FilmsGenres.DEFAULT,
    films: [],
    promo: {},
    film: {
      id: 1,
      name: `Macbeth`,
      posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
      backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
      backgroundColor: `#F1E9CE`,
      videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
      rating: 3.3,
      scoresCount: 48798,
      director: `Justin Kurzel`,
      starring: [
        `Michael Fassbender`,
        `Marion Cotillard`,
        `Jack Madigan`
      ],
      runTime: 113,
      genre: `Drama`,
      released: 2015,
      isFavorite: false
    },
    filmComments: [],
    favoriteFilms: [],

    isLoadFilms: true,
    isLoadFilm: true,
    isLoadFilmFailed: true,
    isLoadPromo: true,
    isLoadComments: false,
    isLoadFavoriteFilms: false,
    isFormDisabled: false,
  },
  USER: {
    user: {},
    authorizationStatus: AuthorizationStatus.AUTH,
  },
};

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'MainScreen' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    history.push(RouteApp.MAIN);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(new RegExp(`My list`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Play`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`All genres`, `i`))).toBeInTheDocument();
  });

  it(`Render 'MyListScreen' when user navigate to '/mylist' url`, () => {
    const history = createMemoryHistory();
    history.push(RouteApp.MY_LIST);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(new RegExp(`My list`, `i`))).toBeInTheDocument();
  });

  it(`Render 'AddReviewScreen' when user navigate to '/films/:id/review' url`, () => {
    const history = createMemoryHistory();
    history.push(RouteApp.MOVIE_REVIEW);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(new RegExp(`Add review`, `i`))).toBeInTheDocument();
  });

  it(`Render 'MoviePageScreen' when user navigate to '/films/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(RouteApp.MOVIE_PAGE);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(new RegExp(`Play`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`My list`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Overview`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Details`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Reviews`, `i`))).toBeInTheDocument();
  });

  it(`Render 'PlayerScreen' when user navigate to '/player/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(RouteApp.PLAYER);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`video`)).toBeInTheDocument();
  });

  it(`Render 'NotFoundScreen' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/non-existent-route`);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(new RegExp(`404`, `i`))).toBeInTheDocument();
  });
});
