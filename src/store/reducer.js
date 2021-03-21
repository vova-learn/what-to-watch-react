import {ActionTypes} from './types';
import {AuthorizationStatus, FilmsGenres} from '../const';

const initialState = {
  genre: FilmsGenres.DEFAULT,
  films: [],
  film: {},
  promo: {},
  isLoadFilms: false,
  isLoadFilm: false,
  isLoadPromo: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENRE:
      return {...state, genre: action.payload};
    case ActionTypes.LOAD_FILMS:
      return {...state, films: action.payload, isLoadFilms: true};
    case ActionTypes.LOAD_FILM:
      return {...state, film: action.payload, isLoadFilm: true};
    case ActionTypes.LOAD_PROMO:
      return {...state, promo: action.payload, isLoadPromo: true};
    case ActionTypes.LOAD_USER:
      return {...state, user: action.payload};
    case ActionTypes.REQUIRED_AUTHORIZATION:
      return {...state, authorizationStatus: action.payload};
    case ActionTypes.RESET_FILM:
      return {...state, isLoadFilm: false};
    default: return state;
  }
};
