import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import App from './components/app/app';
import {FilmsGenres, Lists} from './const';
import {films} from './mock/films';
import {getGenres} from './utils';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createApi} from './api/api';

const api = createApi();
const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

const filmsGenres = [FilmsGenres.DEFAULT, ...getGenres(films, Lists.MAX_GENER_TABS)];

ReactDOM.render(
    <Provider store={store}>
      <App
        films={films}
        filmsGenres={filmsGenres}
      />
    </Provider>,
    document.querySelector(`#root`)
);
