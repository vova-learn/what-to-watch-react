import {ActionTypes} from './../store/types';
import {
  loadFilmFailed,
  resetFilm,
  loadFavoriteFilm,
  loadFavoriteFilms,
  loadFilm,
  loadFilmsList,
  loadPromoFilm,
  showGenre,
  loadUser,
  requiredAuthorization,
  redirectToRoute,
  loadComment,
  disabledForm
} from './actions';

describe(`Action creators work correctly`, () => {
  it(`Action creator for 'showGenre' returns correct action with active genre in payload`, () => {
    const someGenre = `someGenre`;

    const expectedAction = {
      type: ActionTypes.CHANGE_GENRE,
      payload: someGenre,
    };

    expect(showGenre(someGenre)).toEqual(expectedAction);
  });

  it(`Action creator for 'loadFilmsList' returns correct action with films list in payload`, () => {
    const someFilms = [];

    const expectedAction = {
      type: ActionTypes.LOAD_FILMS,
      payload: someFilms,
    };

    expect(loadFilmsList(someFilms)).toEqual(expectedAction);
  });

  it(`Action creator for 'loadFilm' return correct action with film`, () => {
    const someFilm = {};

    const expectedAction = {
      type: ActionTypes.LOAD_FILM,
      payload: someFilm,
    };

    expect(loadFilm(someFilm)).toEqual(expectedAction);
  });

  it(`Action creator for 'loadPromoFilm' return correct action with promo film`, () => {
    const someFilm = {};

    const expectedAction = {
      type: ActionTypes.LOAD_PROMO,
      payload: someFilm,
    };

    expect(loadPromoFilm(someFilm)).toEqual(expectedAction);
  });

  it(`Action creator for 'loadFavoriteFilms' return correct action with favorite films`, () => {
    const someFilms = [];

    const expectedAction = {
      type: ActionTypes.LOAD_FAVORITE_FILMS,
      payload: someFilms,
    };

    expect(loadFavoriteFilms(someFilms)).toEqual(expectedAction);
  });

  it(`Action creator for 'loadFavoriteFilm' return correct action with favorite film`, () => {
    const someFilm = {};
    const isPromo = true;

    const expectedAction = {
      type: ActionTypes.LOAD_FAVORITE_FILM,
      payload: {
        film: someFilm,
        isPromo,
      },
    };

    expect(loadFavoriteFilm(someFilm, isPromo)).toEqual(expectedAction);
  });

  it(`Action creator for 'resetFilm' return correct action with type reset load film`, () => {
    const expectedAction = {
      type: ActionTypes.RESETLOAD_FILM,
    };

    expect(resetFilm()).toEqual(expectedAction);
  });

  it(`Action creator for 'loadFilmFailed' return correct action with status in bool type`, () => {
    const isLoad = false;

    const expectedAction = {
      type: ActionTypes.LOAD_FAILED,
      payload: isLoad,
    };

    expect(loadFilmFailed(isLoad)).toEqual(expectedAction);
  });

  it(`Action creator for 'loadUser return correct action with user info`, () => {
    const user = {};

    const expectedAction = {
      type: ActionTypes.LOAD_USER,
      payload: user,
    };

    expect(loadUser(user)).toEqual(expectedAction);
  });

  it(`Action creator for 'requiredAuthorization' return correct action with authorization status`, () => {
    const status = ``;

    const expectedAction = {
      type: ActionTypes.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(requiredAuthorization(status)).toEqual(expectedAction);
  });

  it(`Action creator for 'redirectToRoute' return correct action with route url`, () => {
    const url = ``;

    const expectedAction = {
      type: ActionTypes.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it(`Action creator for 'loadComment' return correct action with comments array`, () => {
    const comments = [];

    const expectedAction = {
      type: ActionTypes.LOAD_COMMENT,
      payload: comments,
    };

    expect(loadComment(comments)).toEqual(expectedAction);
  });

  it(`Action creator for 'disabledForm' return correct action with disabled status`, () => {
    const isDisabled = false;

    const expectedAction = {
      type: ActionTypes.FORM_DISABLED,
      payload: isDisabled,
    };

    expect(disabledForm(isDisabled)).toEqual(expectedAction);
  });
});
