import FilmModel from "../api/film-model";
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
