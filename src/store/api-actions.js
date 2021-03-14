import {ActionCreator} from "./actions";

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
  .then((response) => {
    dispatch(ActionCreator.loadFilmsList(response.data));
  });
};
