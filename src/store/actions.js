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
  loadPromoFilm: (film) => ({
    type: ActionTypes.LOAD_PROMO,
    payload: film,
  }),
  requiredAuthorization: (status) => ({
    type: ActionTypes.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};
