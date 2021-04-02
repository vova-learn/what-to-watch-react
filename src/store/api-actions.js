import FilmModel from "../api/film-model";
import UserModel from "../api/user-model";

import {HttpCode} from "../api/api";
import {AuthorizationStatus, ApiRoute} from "../const";
import {disabledForm, loadComment, loadFavoriteFilm, loadFavoriteFilms, loadFilm, loadFilmFailed, loadFilmsList, loadPromoFilm, loadUser, redirectToRoute, requiredAuthorization} from "./actions";

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.FILMS)
  .then(({data}) => {
    const films = FilmModel.getFilms(data);
    dispatch(loadFilmsList(films));
  });
};

export const fetchFilm = (id) => (dispatch, _getState, api) => {
  return api.get(`${ApiRoute.FILMS}${id}`)
  .then(({data}) => {
    const film = FilmModel.getFilm(data);
    dispatch(loadFilm(film));
  })
  .catch((error) => {
    if (error.response.status === HttpCode.NOT_FOUND) {
      dispatch(loadFilmFailed(true));
    }
  });
};

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.PROMO_FILM)
  .then(({data}) => {
    const film = FilmModel.getFilm(data);
    dispatch(loadPromoFilm(film));
  });
};

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.LOGIN)
  .then(({data}) => {
    dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
    return data;
  })
  .then((data) => {
    const user = UserModel.getUser(data);
    dispatch(loadUser(user));
  })
  .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  return api.post(ApiRoute.LOGIN, {email, password})
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
  return api.post(`${ApiRoute.COMMENTS}${id}`, {comment: comment.comment, rating: comment.rating})
  .then(({data}) => dispatch(loadComment(data)))
  .then(() => dispatch(redirectToRoute(`/films/${id}`)))
  .catch(() => dispatch(disabledForm(false)));
};

export const downloadComment = (id) => (dispatch, _getState, api) => {
  return api.get(`${ApiRoute.COMMENTS}${id}`)
  .then(({data}) => dispatch(loadComment(data)));
};

export const checkFavoriteFilm = (id, status, isPromo) => (dispatch, _getState, api) => {
  return api.post(`${ApiRoute.FAVORITE}${id}/${status}`)
  .then(({data}) => {
    const film = FilmModel.getFilm(data);
    dispatch(loadFavoriteFilm(film, isPromo));
  });
};

export const downloadFavoriteFilms = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.FAVORITE)
  .then(({data}) => {
    const film = FilmModel.getFilms(data);
    dispatch(loadFavoriteFilms(film));
  });
};
