import {FilmsGenres} from '../../const';
import {ActionTypes} from '../types';
import {data} from './data';

const films = [
  {
    id: 2,
    name: `Beach`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/beach.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/beach.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/beach.jpg`,
    backgroundColor: `#EBC996`,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.`,
    rating: 3.3,
    scoresCount: 207824,
    director: `Danny Boyle`,
    runTime: 119,
    genre: `Adventure`,
    released: 2000,
    isFavorite: false,
  },
  {
    id: 18,
    name: `Seven Years in Tibet`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Seven_Years_in_Tibet.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/seven-years-in-tibet.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Seven_Years_in_Tibet.jpg`,
    backgroundColor: `#C6CADF`,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China's takeover of Tibet.`,
    rating: 3.6,
    scoresCount: 112612,
    director: `Jean-Jacques Annaud`,
    runTime: 136,
    genre: `Adventure`,
    released: 1997,
    isFavorite: false,
  },
  {
    id: 18,
    name: `Seven Years in Tibet`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Seven_Years_in_Tibet.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/seven-years-in-tibet.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Seven_Years_in_Tibet.jpg`,
    backgroundColor: `#C6CADF`,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China's takeover of Tibet.`,
    rating: 3.6,
    scoresCount: 112612,
    director: `Jean-Jacques Annaud`,
    runTime: 136,
    genre: `Adventure`,
    released: 1997,
    isFavorite: false,
  },
  {
    id: 6,
    name: `Matrix`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/matrix.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/matrix.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/matrix.jpg`,
    backgroundColor: `#B9B27E`,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`,
    rating: 4.4,
    scoresCount: 1503092,
    director: `Wachowski Brothers`,
    runTime: 136,
    genre: `Action`,
    released: 1999,
    isFavorite: false,
  },
];

const film = {
  id: 8,
  name: `The Revenant`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Revenant.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/revenant.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Revenant.jpg`,
  backgroundColor: `#92918B`,
  videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
  rating: 4,
  scoresCount: 618498,
  director: `Alejandro G. Iñárritu`,
  runTime: 156,
  genre: `Action`,
  released: 2015,
  isFavorite: false,
};

const filmComments = [
  {
    id: 1,
    user: {
      id: 16,
      name: `Mollie`
    },
    rating: 9.8,
    comment: `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
    date: `2021-03-04T08:04:28.658Z`
  },
  {
    id: 2,
    user: {
      id: 13,
      name: `Zak`
    },
    rating: 1.1,
    comment: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
    date: `2021-02-13T08:04:28.658Z`
  },
];

describe(`Reducer 'data' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    const initialState = {
      genre: FilmsGenres.DEFAULT,
      films: [],
      promo: {},
      film: {},
      filmComments: [],
      favoriteFilms: [],

      isLoadFilms: false,
      isLoadFilm: false,
      isLoadFilmFailed: false,
      isLoadPromo: false,
      isLoadComments: false,
      isLoadFavoriteFilms: false,
      isFormDisabled: false,
    };

    expect(data(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change active 'genre' in 'data' state`, () => {
    const state = {
      genre: FilmsGenres.DEFAULT,
      otherData: `Other data`,
    };

    const changeGenreAction = {
      type: ActionTypes.CHANGE_GENRE,
      payload: `someGenre`,
    };

    expect(data(state, changeGenreAction))
      .toEqual({genre: changeGenreAction.payload, otherData: `Other data`});
  });

  it(`Reducer should set in 'data' state downloaded films and 'isLoadFilms' status`, () => {
    const state = {
      films: [],
      isLoadFilms: true,
      otherData: `Other data`,
    };

    const loadFilmsAction = {
      type: ActionTypes.LOAD_FILMS,
      payload: films,
    };

    expect(data(state, loadFilmsAction))
      .toEqual({films: loadFilmsAction.payload, isLoadFilms: true, otherData: `Other data`});
  });

  it(`Reducer should set in 'data' state downloaded film, 'isLoadFilms' and 'isLoadComments' statuses`, () => {
    const state = {
      film: {},
      isLoadFilm: true,
      isLoadComments: false,
      otherData: `Other data`,
    };

    const loadFilmAction = {
      type: ActionTypes.LOAD_FILM,
      payload: film,
    };

    expect(data(state, loadFilmAction))
      .toEqual({film: loadFilmAction.payload, isLoadFilm: true, isLoadComments: false, otherData: `Other data`});
  });

  it(`Reducer should set in 'data' state downloaded promo film and 'isLoadPromo' status`, () => {
    const state = {
      promo: {},
      isLoadPromo: true,
      otherData: `Other data`,
    };

    const loadPromoFilmAction = {
      type: ActionTypes.LOAD_PROMO,
      payload: film,
    };

    expect(data(state, loadPromoFilmAction))
      .toEqual({promo: loadPromoFilmAction.payload, isLoadPromo: true, otherData: `Other data`});
  });

  it(`Reducer should reset 'isLoadFilm' status`, () => {
    const state = {
      isLoadFilm: false,
      otherData: `Other data`,
    };

    const resetFilmAction = {
      type: ActionTypes.RESETLOAD_FILM,
    };

    expect(data(state, resetFilmAction))
      .toEqual({isLoadFilm: false, otherData: `Other data`});
  });

  it(`Reducer should change 'isLoadFilmFailed' status, if film loaded failed`, () => {
    const state = {
      isLoadFilmFailed: false,
      otherData: `Other data`,
    };

    const loadFilmFailedAction = {
      type: ActionTypes.LOAD_FAILED,
      payload: false,
    };

    expect(data(state, loadFilmFailedAction))
      .toEqual({isLoadFilmFailed: loadFilmFailedAction.payload, otherData: `Other data`});
  });

  it(`Reducer should set in 'data' state new downloaded comments film and 'isLoadComments', 'isFormDisabled' statuses`, () => {
    const state = {
      filmComments: [],
      isFormDisabled: false,
      isLoadComments: true,
      otherData: `Other data`,
    };

    const loadCommentsAction = {
      type: ActionTypes.LOAD_COMMENT,
      payload: filmComments,
    };

    expect(data(state, loadCommentsAction))
      .toEqual({filmComments: loadCommentsAction.payload, isFormDisabled: false, isLoadComments: true, otherData: `Other data`});
  });

  it(`Reducer should change 'isFormDisabled' status, if comment film loaded failed`, () => {
    const state = {
      isFormDisabled: false,
      otherData: `Other data`,
    };

    const disabledFormAction = {
      type: ActionTypes.FORM_DISABLED,
      payload: true,
    };

    expect(data(state, disabledFormAction))
      .toEqual({isFormDisabled: disabledFormAction.payload, otherData: `Other data`});
  });

  it(`Reducer should set in 'data' state new downloaded film and favorite film data with flag 'isLoadFavoriteFilms'`, () => {
    const state = {
      film: {},
      promo: {},
      isLoadFavoriteFilms: false,
      otherData: `Other data`,
    };

    const loadFavoriteFilmAction = {
      type: ActionTypes.LOAD_FAVORITE_FILM,
      payload: {
        film,
        isPromo: true,
      },
    };

    const promoFilm = loadFavoriteFilmAction.payload.isPromo ?
      loadFavoriteFilmAction.payload.film :
      state.promo;

    expect(data(state, loadFavoriteFilmAction))
      .toEqual({film: loadFavoriteFilmAction.payload.film, promo: promoFilm, isLoadFavoriteFilms: false, otherData: `Other data`});
  });

  it(`Reducer should set in 'data' state new downloaded favorite films`, () => {
    const state = {
      favoriteFilms: {},
      isLoadFavoriteFilms: true,
    };

    const loadFavoriteFilmsAction = {
      type: ActionTypes.LOAD_FAVORITE_FILMS,
      payload: films,
    };

    expect(data(state, loadFavoriteFilmsAction))
      .toEqual({favoriteFilms: loadFavoriteFilmsAction.payload, isLoadFavoriteFilms: true});
  });
});
