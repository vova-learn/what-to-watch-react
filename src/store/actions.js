import {ActionTypes} from './types';

export const showGenre = (genre) => ({
  type: ActionTypes.CHANGE_GENRE,
  payload: genre,
});
export const loadFilmsList = (films) => ({
  type: ActionTypes.LOAD_FILMS,
  payload: films,
});
export const loadFilm = (film) => ({
  type: ActionTypes.LOAD_FILM,
  payload: film,
});
export const loadPromoFilm = (film) => ({
  type: ActionTypes.LOAD_PROMO,
  payload: film,
});
export const loadUser = (user) => ({
  type: ActionTypes.LOAD_USER,
  payload: user,
});
export const loadComment = (comments) => ({
  type: ActionTypes.LOAD_COMMENT,
  payload: comments,
});
export const requiredAuthorization = (status) => ({
  type: ActionTypes.REQUIRED_AUTHORIZATION,
  payload: status,
});
export const resetFilm = () => ({
  type: ActionTypes.RESET_FILM,
});
export const loadFilmFailed = (status) => ({
  type: ActionTypes.LOAD_FAILED,
  payload: status,
});
export const disabledForm = (status) => ({
  type: ActionTypes.FORM_DISABLED,
  payload: status,
});
export const redirectToRoute = (url) => ({
  type: ActionTypes.REDIRECT_TO_ROUTE,
  payload: url,
});
export const loadFavoriteFilm = (film, isPromo) => ({
  type: ActionTypes.LOAD_FAVORITE_FILM,
  payload: {
    film,
    isPromo,
  },
});
export const loadFavoriteFilms = (film) => ({
  type: ActionTypes.LOAD_FAVORITE_FILMS,
  payload: film,
});
