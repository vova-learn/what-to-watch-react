import FilmModel from "../api/film-model";
import {AuthorizationStatus} from "../const";
import {ActionCreator} from "./actions";

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
  .then((response) => {
    return FilmModel.getFilms(response.data);
  }).then((films) => {
    dispatch(ActionCreator.loadFilmsList(films));
  });
};

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  return api.get(`/films/promo/`)
  .then((response) => {
    return FilmModel.getFilm(response.data);
  }).then((film) => {
    dispatch(ActionCreator.loadPromoFilm(film));
  });
};

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(`/login`)
  .then(() => {
    dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
  })
  .catch(() => {
    // TODO: удалить;
    // const isUserAuth = store.getState().authorizationStatus;
    // isUserAuth && dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
    // dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
  });
};
