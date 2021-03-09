import {ActionTypes} from './types';
import {films} from '../mock/films';
import {FilmsGenres} from '../const';

const initialState = {
  genre: FilmsGenres.DEFAULT,
  films,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENRE:
      return {...state, genre: action.payload};
    default: return state;
  }
};
