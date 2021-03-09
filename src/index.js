import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/app/app';
import {FilmsGenres, Lists} from './const';
import {films} from './mock/films';
import {getGenres} from './utils';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);
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
