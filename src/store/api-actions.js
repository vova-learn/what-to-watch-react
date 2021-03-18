import FilmModel from "../api/film-model";
import UserModel from "../api/user-model";
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
  .then(({data}) => {
    dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
    return data;
  })
  .then((data) => {
    dispatch(ActionCreator.loadUser(UserModel.getUser(data)));
  })
  .catch(() => {
    // TODO: удалить;
    // const isUserAuth = store.getState().authorizationStatus;
    // isUserAuth && dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
    // dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
  });
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  return api.post(`/login`, {email, password})
  .then(({data}) => {
    dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
    return data;
  })
  .then((data) => {
    dispatch(ActionCreator.loadUser(UserModel.getUser(data)));
  });
};
