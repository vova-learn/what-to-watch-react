import browserHistory from '../../browser-history';
import {ActionTypes} from '../types';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionTypes.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
