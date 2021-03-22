import {ActionTypes} from './types';

export const ActionCreator = {
  showGenre: (genre) => ({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre
  }),
  loadFilmsList: (films) => ({
    type: ActionTypes.LOAD_FILMS,
    payload: films,
  }),
  loadFilm: (film) => ({
    type: ActionTypes.LOAD_FILM,
    payload: film,
  }),
  loadPromoFilm: (film) => ({
    type: ActionTypes.LOAD_PROMO,
    payload: film,
  }),
  loadUser: (user) => ({
    type: ActionTypes.LOAD_USER,
    payload: user,
  }),
  loadComment: (comments) => ({
    type: ActionTypes.LOAD_COMMENT,
    payload: comments,
  }),
  requiredAuthorization: (status) => ({
    type: ActionTypes.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  resetFilm: () => ({
    type: ActionTypes.RESET_FILM,
  }),
  loadFilmFailed: (status) => ({
    type: ActionTypes.LOAD_FAILED,
    payload: status,
  }),
  disabledForm: (status) => ({
    type: ActionTypes.FORM_DISABLED,
    payload: status,
  })
};
