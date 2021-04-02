import {ActionTypes} from '../types';
import {AuthorizationStatus} from '../../const';

const initialState = {
  user: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_USER:
      return {
        ...state,
        user: action.payload
      };
    case ActionTypes.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    default: return state;
  }
};
