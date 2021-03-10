import {ActionTypes} from './types';

export const ActionCreator = {
  showGenre: (genre) => ({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre
  })
};
