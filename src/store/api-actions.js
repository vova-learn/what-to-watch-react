import FilmModel from "../api/film-model";
import UserModel from "../api/user-model";

import {HttpCode} from "../api/api";
import {AuthorizationStatus} from "../const";
import {disabledForm, loadComment, loadFavoriteFilm, loadFavoriteFilms, loadFilm, loadFilmFailed, loadFilmsList, loadPromoFilm, loadUser, redirectToRoute, requiredAuthorization} from "./actions";

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
  .then(({data}) => {
    const films = FilmModel.getFilms(data);
    dispatch(loadFilmsList(films));
  });
};

export const fetchFilm = (id) => (dispatch, _getState, api) => {
  return api.get(`/films/${id}`)
  .then(({data}) => {
    const film = FilmModel.getFilm(data);
    dispatch(loadFilm(film));
  })
  .catch((error) => (
    error.response.status === HttpCode.NOT_FOUND && dispatch(loadFilmFailed(true))
  ));
};

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  return api.get(`/films/promo/`)
  .then(({data}) => {
    const film = FilmModel.getFilm(data);
    dispatch(loadPromoFilm(film));
  });
};

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(`/login`)
  .then(({data}) => {
    dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
    return data;
  })
  .then((data) => {
    const user = UserModel.getUser(data);
    dispatch(loadUser(user));
  });
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  return api.post(`/login`, {email, password})
  .then(({data}) => {
    dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
    return data;
  })
  .then((data) => {
    const user = UserModel.getUser(data);
    dispatch(loadUser(user));
  });
};

export const uploadComment = (id, comment) => (dispatch, _getState, api) => {
  return api.post(`/comments/${id}`, {comment: comment.comment, rating: comment.rating})
  .then(({data}) => dispatch(loadComment(data)))
  .then(() => dispatch(redirectToRoute(`/films/${id}`)))
  .catch(() => dispatch(disabledForm(false)));
};

export const downloadComment = (id) => (dispatch, _getState, api) => {
  return api.get(`/comments/${id}`)
  .then(({data}) => dispatch(loadComment(data)));
};

export const checkFavoriteFilm = (id, status, isPromo) => (dispatch, _getState, api) => {
  return api.post(`/favorite/${id}/${status}`)
  .then(({data}) => {
    const film = FilmModel.getFilm(data);
    dispatch(loadFavoriteFilm(film, isPromo));
  });
};

export const downloadFavoriteFilms = () => (dispatch, _getState, api) => {
  return api.get(`/favorite`)
  .then(({data}) => {
    const film = FilmModel.getFilms(data);
    dispatch(loadFavoriteFilms(film));
  });
};
