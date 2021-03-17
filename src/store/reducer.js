import {ActionTypes} from './types';
import {AuhorizationStatus, FilmsGenres} from '../const';

const initialState = {
  genre: FilmsGenres.DEFAULT,
  films: [],
  promo: {},
  isLoadFilms: false,
  isLoadPromo: false,
  authorizationStatus: AuhorizationStatus.NO_AUTH,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENRE:
      return {...state, genre: action.payload};
    case ActionTypes.LOAD_FILMS:
      return {...state, films: action.payload, isLoadFilms: true};
    case ActionTypes.LOAD_PROMO:
      return {...state, promo: action.payload, isLoadPromo: true};
    case ActionTypes.REQUIRED_AUTHORIZATION:
      return {...state, authorizationStatus: action.payload};
    default: return state;
  }
};
