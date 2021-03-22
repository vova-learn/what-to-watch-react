import {HttpCode} from "../api/api";
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

export const fetchFilm = (id) => (dispatch, _getState, api) => {
  return api.get(`/films/${id}`)
  .then(({data}) => FilmModel.getFilm(data))
  .then((film) => dispatch(ActionCreator.loadFilm(film)))
  .catch((error) => (
    error.response.status === HttpCode.NOT_FOUND && dispatch(ActionCreator.loadFilmFailed(true))
  ));
  // TODO: в 21 строке норм решение? Не нашел как задиспатчить из axios (../api/api.js);
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

export const uploadComment = (id, comment) => (dispatch, _getState, api) => {
  return api.post(`/comments/${id}`, {comment: comment.comment, rating: comment.rating})
  .then(({data}) => data)
  .then((comments) => dispatch(ActionCreator.loadComment(comments)))
  .then(() => dispatch(ActionCreator.redirectToRoute(`/films/${id}`)))
  .catch(() => dispatch(ActionCreator.disabledForm(false)));
};
