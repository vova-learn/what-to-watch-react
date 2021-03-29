import {NameSpace} from './../root-reducer';

export const getGenre = (state) => state[NameSpace.DATA].genre;
export const getFilms = (state) => state[NameSpace.DATA].films;
export const getPromoFilm = (state) => state[NameSpace.DATA].promo;
export const getFilm = (state) => state[NameSpace.DATA].film;
export const getFilmComments = (state) => state[NameSpace.DATA].filmComments;
export const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
export const getStatusLoadFilms = (state) => state[NameSpace.DATA].isLoadFilms;
export const getStatusLoadFilm = (state) => state[NameSpace.DATA].isLoadFilm;
export const getStatusLoadFilmFailed = (state) => state[NameSpace.DATA].isLoadFilmFailed;
export const getStatusLoadPromoFilm = (state) => state[NameSpace.DATA].isLoadPromo;
export const getStatusLoadComments = (state) => state[NameSpace.DATA].isLoadComments;
export const getStatusLoadFavoriteFilms = (state) => state[NameSpace.DATA].isLoadFavoriteFilms;
export const getStatusFormDisabled = (state) => state[NameSpace.DATA].isFormDisabled;
