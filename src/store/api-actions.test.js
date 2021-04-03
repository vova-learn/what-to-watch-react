import {createApi} from "../api/api";
import MockAdapter from 'axios-mock-adapter';
import {ApiRoute, AuthorizationStatus} from "../const";
import {ActionTypes} from "./types";
import {
  downloadFavoriteFilms,
  checkFavoriteFilm,
  downloadComment,
  uploadComment,
  login,
  checkAuth,
  fetchPromoFilm,
  fetchFilm,
  fetchFilmsList
} from "./api-actions";

const api = createApi(() => {});
describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFilms = fetchFilmsList();

    apiMock
    .onGet(ApiRoute.FILMS)
    .reply(200, [
      {
        "id": 1,
        "name": `The Grand Budapest Hotel`,
        "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
        "preview_image": `img/the-grand-budapest-hotel.jpg`,
        "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
        "background_color": `#ffffff`,
        "video_link": `https://some-link`,
        "preview_video_link": `https://some-link`,
        "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
        "rating": 8.9,
        "scores_count": 240,
        "director": `Wes Andreson`,
        "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
        "run_time": 99,
        "genre": `Comedy`,
        "released": 2014,
        "is_favorite": false
      }
    ]);

    return loadFilms(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.LOAD_FILMS,
        payload: [{
          id: 1,
          name: `The Grand Budapest Hotel`,
          posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
          previewImage: `img/the-grand-budapest-hotel.jpg`,
          backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
          backgroundColor: `#ffffff`,
          videoLink: `https://some-link`,
          previewVideoLink: `https://some-link`,
          description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
          rating: 8.9,
          scoresCount: 240,
          director: `Wes Andreson`,
          starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
          runTime: 99,
          genre: `Comedy`,
          released: 2014,
          isFavorite: false
        }],
      });
    });
  });

  it(`Should make a correct API call to /films by id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 3;
    const loadFilm = fetchFilm(fakeId);

    apiMock
    .onGet(`${ApiRoute.FILMS}${fakeId}`)
    .reply(200,
        {
          "id": 1,
          "name": `The Grand Budapest Hotel`,
          "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
          "preview_image": `img/the-grand-budapest-hotel.jpg`,
          "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
          "background_color": `#ffffff`,
          "video_link": `https://some-link`,
          "preview_video_link": `https://some-link`,
          "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
          "rating": 8.9,
          "scores_count": 240,
          "director": `Wes Andreson`,
          "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
          "run_time": 99,
          "genre": `Comedy`,
          "released": 2014,
          "is_favorite": false
        }
    );

    return loadFilm(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.LOAD_FILM,
        payload: {
          id: 1,
          name: `The Grand Budapest Hotel`,
          posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
          previewImage: `img/the-grand-budapest-hotel.jpg`,
          backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
          backgroundColor: `#ffffff`,
          videoLink: `https://some-link`,
          previewVideoLink: `https://some-link`,
          description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
          rating: 8.9,
          scoresCount: 240,
          director: `Wes Andreson`,
          starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
          runTime: 99,
          genre: `Comedy`,
          released: 2014,
          isFavorite: false
        },
      });
    });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadPromoFilm = fetchPromoFilm();

    apiMock
    .onGet(ApiRoute.PROMO_FILM)
    .reply(200, {
      "id": 1,
      "name": `The Grand Budapest Hotel`,
      "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
      "preview_image": `img/the-grand-budapest-hotel.jpg`,
      "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
      "background_color": `#ffffff`,
      "video_link": `https://some-link`,
      "preview_video_link": `https://some-link`,
      "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      "rating": 8.9,
      "scores_count": 240,
      "director": `Wes Andreson`,
      "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
      "run_time": 99,
      "genre": `Comedy`,
      "released": 2014,
      "is_favorite": false
    });

    return loadPromoFilm(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.LOAD_PROMO,
        payload: {
          id: 1,
          name: `The Grand Budapest Hotel`,
          posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
          previewImage: `img/the-grand-budapest-hotel.jpg`,
          backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
          backgroundColor: `#ffffff`,
          videoLink: `https://some-link`,
          previewVideoLink: `https://some-link`,
          description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
          rating: 8.9,
          scoresCount: 240,
          director: `Wes Andreson`,
          starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
          runTime: 99,
          genre: `Comedy`,
          released: 2014,
          isFavorite: false
        }
      });
    });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkUserAuth = checkAuth();

    apiMock
    .onGet(ApiRoute.LOGIN)
    .reply(200, {
      "id": 1,
      "email": `Oliver.conner@gmail.com`,
      "name": `Oliver.conner`,
      "avatar_url": `img/1.png`
    });

    return checkUserAuth(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionTypes.LOAD_USER,
        payload: {
          id: 1,
          email: `Oliver.conner@gmail.com`,
          name: `Oliver.conner`,
          avatar: `img/1.png`
        }
      });
    });
  });

  it(`Should make a correct API call to /login for registration`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeEmail = `login@fake.io`;
    const fakePassword = `123`;
    const loginUser = login({login: fakeEmail, password: fakePassword});

    apiMock
    .onPost(ApiRoute.LOGIN, {email: fakeEmail, password: fakePassword})
    .reply(200, {
      "id": 1,
      "email": fakeEmail,
      "name": `Oliver.conner`,
      "avatar_url": `img/1.png`
    });

    return loginUser(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionTypes.LOAD_USER,
        payload: {
          id: 1,
          email: fakeEmail,
          name: `Oliver.conner`,
          avatar: `img/1.png`
        }
      });
    });
  });

  it(`Should make a correct API call to /comments for add new comment`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeComment = {
      commnent: `I love this movie.`,
      rating: `10`,
    };
    const uploadingComment = uploadComment(fakeId, fakeComment);

    apiMock
    .onPost(`${ApiRoute.COMMENTS}${fakeId}`, {comment: fakeComment.commnent, rating: fakeComment.rating})
    .reply(200, [{
      "id": 1,
      "user": {
        "id": 4,
        "name": `Kate Muir`
      },
      "rating": fakeComment.rating,
      "comment": fakeComment.commnent,
      "date": `2019-05-08T14:13:56.569Z`
    }]);

    return uploadingComment(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.LOAD_COMMENT,
        payload: [{
          id: 1,
          user: {
            id: 4,
            name: `Kate Muir`
          },
          rating: fakeComment.rating,
          comment: fakeComment.commnent,
          date: `2019-05-08T14:13:56.569Z`
        }]
      });
    })
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.REDIRECT_TO_ROUTE,
        payload: `${ApiRoute.FILMS}${fakeId}`,
      });
    })
    .catch(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.FORM_DISABLED,
        payload: false,
      });
    });
  });

  it(`Should make a correct API call to /comments for download film comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const downloadingComment = downloadComment(fakeId);

    apiMock
    .onGet(`${ApiRoute.COMMENTS}${fakeId}`)
    .reply(200, [{
      "id": 1,
      "user": {
        "id": 4,
        "name": `Kate Muir`
      },
      "rating": 8.9,
      "comment": `I love this movie.`,
      "date": `2019-05-08T14:13:56.569Z`
    }]);

    return downloadingComment(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.LOAD_COMMENT,
        payload: [{
          id: 1,
          user: {
            id: 4,
            name: `Kate Muir`
          },
          rating: 8.9,
          comment: `I love this movie.`,
          date: `2019-05-08T14:13:56.569Z`
        }]
      });
    });
  });

  it(`Should make a correct API call to /favorites with 'film ID' and 'favorite status' for change favorite status film`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeStatus = {
      status: 1,
      result: true,
    };
    const fakeFlag = false;
    const changeFavoriteFilm = checkFavoriteFilm(fakeId, fakeStatus.status, fakeFlag);

    apiMock
    .onPost(`${ApiRoute.FAVORITE}${fakeId}/${fakeStatus.status}`)
    .reply(200, {
      "id": 1,
      "name": `The Grand Budapest Hotel`,
      "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
      "preview_image": `img/the-grand-budapest-hotel.jpg`,
      "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
      "background_color": `#ffffff`,
      "video_link": `https://some-link`,
      "preview_video_link": `https://some-link`,
      "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      "rating": 8.9,
      "scores_count": 240,
      "director": `Wes Andreson`,
      "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
      "run_time": 99,
      "genre": `Comedy`,
      "released": 2014,
      "is_favorite": fakeStatus.result
    });

    return changeFavoriteFilm(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.LOAD_FAVORITE_FILM,
        payload: {
          film: {
            id: 1,
            name: `The Grand Budapest Hotel`,
            posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
            previewImage: `img/the-grand-budapest-hotel.jpg`,
            backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
            backgroundColor: `#ffffff`,
            videoLink: `https://some-link`,
            previewVideoLink: `https://some-link`,
            description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
            rating: 8.9,
            scoresCount: 240,
            director: `Wes Andreson`,
            starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
            runTime: 99,
            genre: `Comedy`,
            released: 2014,
            isFavorite: fakeStatus.result
          },
          isPromo: fakeFlag,
        },
      });
    });
  });

  it(`favorites films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const downloadingFavoriteFilms = downloadFavoriteFilms();

    apiMock
    .onGet(ApiRoute.FAVORITE)
    .reply(200, [{
      "id": 1,
      "name": `The Grand Budapest Hotel`,
      "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
      "preview_image": `img/the-grand-budapest-hotel.jpg`,
      "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
      "background_color": `#ffffff`,
      "video_link": `https://some-link`,
      "preview_video_link": `https://some-link`,
      "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      "rating": 8.9,
      "scores_count": 240,
      "director": `Wes Andreson`,
      "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
      "run_time": 99,
      "genre": `Comedy`,
      "released": 2014,
      "is_favorite": true
    }]);

    return downloadingFavoriteFilms(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.LOAD_FAVORITE_FILMS,
        payload: [{
          id: 1,
          name: `The Grand Budapest Hotel`,
          posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
          previewImage: `img/the-grand-budapest-hotel.jpg`,
          backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
          backgroundColor: `#ffffff`,
          videoLink: `https://some-link`,
          previewVideoLink: `https://some-link`,
          description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
          rating: 8.9,
          scoresCount: 240,
          director: `Wes Andreson`,
          starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
          runTime: 99,
          genre: `Comedy`,
          released: 2014,
          isFavorite: true
        }]
      });
    });
  });
});
