import {ActionTypes} from './types';
import {FilmsGenres} from '../const';

const initialState = {
  genre: FilmsGenres.DEFAULT,
  films: [],
  promo: {},
  isLoadFilms: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENRE:
      return {...state, genre: action.payload};
    case ActionTypes.LOAD_FILMS:
      return {...state, films: action.payload, isLoadFilms: true};
    default: return state;
  }
};
